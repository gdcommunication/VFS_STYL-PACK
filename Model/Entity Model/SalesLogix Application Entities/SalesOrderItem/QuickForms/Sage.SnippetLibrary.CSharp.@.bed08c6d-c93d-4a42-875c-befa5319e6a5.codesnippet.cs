/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="bed08c6d-c93d-4a42-875c-befa5319e6a5">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFRENOUVELLEMENT_OnChangeStep</name>
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
    public static partial class EditSalesOrderItemEventHandlers
    {
        public static void QFRENOUVELLEMENT_OnChangeStep( IEditSalesOrderItem form,  EventArgs args)
        {
            // TODO: Complete business rule implementation

			string Sql = "";

			ISalesOrderItem salesOrderItem = form.CurrentEntity as ISalesOrderItem;	
			if (!(string.IsNullOrEmpty(form.QFRENOUVELLEMENT.Text)))  
			{
				Sage.Platform.Data.IDataService datasvci = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
				using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvci.GetConnectionString()))
            		{
            			conn.Open();
						Sql="SELECT [COULEURS_RECTO],[COULEURS_VERSO] FROM sysdba.T_HIST_LIGNES_VENTES WHERE NUM_COMMANDE +' - '+ CONVERT(VARCHAR(10),DATE_PIECE,103) ='" + form.QFRENOUVELLEMENT.Text.ToString() + "'" ;
					
									
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
								{
									salesOrderItem.ComplementLigneCommande.COULEURSRECTO = groupement["COULEURS_RECTO"].ToString();
									salesOrderItem.ComplementLigneCommande.COULEURSVERSO = groupement["COULEURS_VERSO"].ToString();
								
								}
						}
					conn.Close();
					}
			}
			
			
			
			
			
        }
    }
}