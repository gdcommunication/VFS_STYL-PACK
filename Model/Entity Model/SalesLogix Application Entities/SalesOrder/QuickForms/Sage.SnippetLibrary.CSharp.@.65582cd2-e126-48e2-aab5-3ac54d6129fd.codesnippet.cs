/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="65582cd2-e126-48e2-aab5-3ac54d6129fd">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFButton_OnClickStep</name>
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
    public static partial class SalesOrderDetailsEventHandlers
    {
        public static void QFButton_OnClickStep( ISalesOrderDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			
			ISalesOrder salesOrder = form.CurrentEntity as ISalesOrder;
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            {
            conn.Open();
				if (!(string.IsNullOrEmpty(salesOrder.Account.Id.ToString())))
				{
	
				string Sql="select A.ACCOUNTID AS ID, A.REGION, AC.*  FROM sysdba.ACCOUNT AS A left join sysdba.T_ACCOUNT_COMP AS AC ON A.ACCOUNTID=AC.ACCOUNTID WHERE A.ACCOUNTID = '" + salesOrder.Account.Id.ToString() + "'";
				
									
				using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                 {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{
								if (!(string.IsNullOrEmpty(groupement["REGION"].ToString()))) 
								{
									salesOrder.ComplementCommande.GOLD=groupement["REGION"].ToString();
								}

								if (!(string.IsNullOrEmpty(groupement["MODE_REGLEMENT_1"].ToString()))) 
								{
									salesOrder.ComplementCommande.MODEREGLEMENT1=groupement["MODE_REGLEMENT_1"].ToString();
									if (!(string.IsNullOrEmpty(groupement["POURCENT_REGLEMENT_1"].ToString()))) 
									{
										salesOrder.ComplementCommande.POURCENTREGLEMENT1=Convert.ToDouble(groupement["POURCENT_REGLEMENT_1"].ToString());
									}
								}
								if (!(string.IsNullOrEmpty(groupement["MODE_REGLEMENT_2"].ToString()))) 
								{
									salesOrder.ComplementCommande.MODEREGLEMENT2=groupement["MODE_REGLEMENT_2"].ToString();
									if (!(string.IsNullOrEmpty(groupement["POURCENT_REGLEMENT_2"].ToString()))) 
									{
										salesOrder.ComplementCommande.POURCENTREGLEMENT2=Convert.ToDouble(groupement["POURCENT_REGLEMENT_2"].ToString());
									}
								}
								if (!(string.IsNullOrEmpty(groupement["MODE_REGLEMENT_3"].ToString()))) 
								{
								salesOrder.ComplementCommande.MODEREGLEMENT3=groupement["MODE_REGLEMENT_3"].ToString();
									if (!(string.IsNullOrEmpty(groupement["POURCENT_REGLEMENT_3"].ToString())))
									{
										salesOrder.ComplementCommande.POURCENTREGLEMENT3=Convert.ToDouble(groupement["POURCENT_REGLEMENT_3"].ToString());
									}
								}
								if (!(string.IsNullOrEmpty(groupement["CLIENT_PAYEUR"].ToString()))) 
								{
									salesOrder.ComplementCommande.CENTREPAYEUR = groupement["CLIENT_PAYEUR"].ToString();
								}

							}
					}
				}
				conn.Close();
   			}
			
			
			
			
			
        }
    }
}
