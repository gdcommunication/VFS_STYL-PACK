/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="dfc683a8-bcd8-409d-a5c3-f3a93308c1cb">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad3Step</name>
 <references>
  <reference>
   <assemblyName>Sage.Entity.Interfaces.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\interfaces\bin\Sage.Entity.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Form.Interfaces.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\formInterfaces\bin\Sage.Form.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\assemblies\Sage.Platform.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.SalesLogix.API.dll</assemblyName>
  </reference>
  <reference>
   <assemblyName>System.Data.dll</assemblyName>
  </reference>
 </references>
</snippetHeader>
*/


#region Usings
using System;
using Sage.Entity.Interfaces;
using Sage.Form.Interfaces;
using Sage.SalesLogix.API;
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class AccountDetailsEventHandlers
    {
        public static void OnLoad3Step( IAccountDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
	
			Sage.Entity.Interfaces.IAccount acc=form.CurrentEntity as Sage.Entity.Interfaces.IAccount;
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            {
                conn.Open();

				if (!(string.IsNullOrEmpty(acc.TCompteInformations.Groupement)))
				{
				
					string Sql="select * FROM sysdba.T_GROUPEMENT Where CODE_GROUPEMENT='" + acc.TCompteInformations.Groupement.ToString()  +"'";
                    using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                    {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{
								form.infogroupement.Text = groupement["REMISE_DEFAULT"].ToString() + "% " + groupement["REGIONAL_NATIONAL"].ToString() + " " + groupement["PART_REF"].ToString();
							}
						
                    }
				}
				
				form.QFImage.Visible = false;
				if (!(string.IsNullOrEmpty(acc.InternalAccountNumber)))
				{
					
					string Sql1="SELECT ISNULL(A.ACCOUNTID,'') AS ACCOUNTID, CASE WHEN A.INDUSTRY NOT IN ('PHARMACIE') THEN ISNULL(CAST(SUM(CASE WHEN DATEDIFF(m,ISNULL(V.DATE_PIECE,0),GETDATE())<=24 THEN V.MONTANT_HT ELSE 0 END) AS VARCHAR),'0') ELSE '0' END AS TotalHT FROM sysdba.ACCOUNT AS A LEFT JOIN sysdba.T_HIST_LIGNES_VENTES AS V ON A.ACCOUNTID=V.ACCOUNTID WHERE A.INTERNALACCOUNTNO='" + acc.InternalAccountNumber.ToString()+ "' GROUP BY A.ACCOUNTID, A.INDUSTRY";
                    using (System.Data.OleDb.OleDbCommand cmd1 = new System.Data.OleDb.OleDbCommand(Sql1 , conn))
                    {   
						
						System.Data.OleDb.OleDbDataReader exclu = cmd1.ExecuteReader();
						
						while (exclu.Read()) 
							{
								
								//throw new Sage.Platform.Application.ValidationException(exclu["TotalHT"].ToString());				
								if (exclu["TotalHT"].ToString() == "0")
								{
								form.QFImage.Visible = false;

								}
								else 
								{


								form.QFImage.Visible = false;
								}
							}
					}						
                    }
		          
					
					
		            conn.Close();
                
			}
        }
    }
}
