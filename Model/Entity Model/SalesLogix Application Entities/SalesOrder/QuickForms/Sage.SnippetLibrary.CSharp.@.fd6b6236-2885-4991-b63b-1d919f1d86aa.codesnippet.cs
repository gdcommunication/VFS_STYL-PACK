/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="fd6b6236-2885-4991-b63b-1d919f1d86aa">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad2Step</name>
 <references>
  <reference>
   <assemblyName>Sage.Form.Interfaces.dll</assemblyName>
   <hintPath>C:\Users\administrateur.STYL-PACK\AppData\Roaming\Sage\Platform\Output\STYLPACK\formInterfaces\bin\Sage.Form.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.dll</assemblyName>
   <hintPath>C:\Users\administrateur.STYL-PACK\AppData\Roaming\Sage\Platform\Output\STYLPACK\assemblies\Sage.Platform.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.AdminModule.dll</assemblyName>
   <hintPath>C:\Users\administrateur.STYL-PACK\AppData\Roaming\Sage\Platform\Output\STYLPACK\assemblies\Sage.Platform.AdminModule.dll</hintPath>
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
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class InsertSalesOrderEventHandlers
    {
        public static void OnLoad2Step( IInsertSalesOrder form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			ISalesOrder salesOrder = form.CurrentEntity as ISalesOrder;
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            {
            conn.Open();
				//if (!(string.IsNullOrEmpty(salesOrder.Account.Id.ToString())))
				//{
	
				string Sql="select A.ACCOUNTID AS ID, AC.*  FROM sysdba.ACCOUNT AS A left join sysdba.T_ACCOUNT_COMP AS AC ON A.ACCOUNTID=AC.ACCOUNTID WHERE A.ACCOUNTID = 'A1LOCA200004'";
				
									
				using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                 {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{
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
				//}
				conn.Close();
   			}

        }
    }
}