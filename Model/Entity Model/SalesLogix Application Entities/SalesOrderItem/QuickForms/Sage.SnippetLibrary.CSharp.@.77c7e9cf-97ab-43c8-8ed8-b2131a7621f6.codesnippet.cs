/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="77c7e9cf-97ab-43c8-8ed8-b2131a7621f6">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad2Step</name>
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
        public static void OnLoad2Step( IEditSalesOrderItem form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			string Sql = "";
			
			ISalesOrderItem salesOrderItem = form.CurrentEntity as ISalesOrderItem;			
					

			form.QFRENOUVELLEMENT.Items.Clear();
			form.QFREPRISEPERSO.Items.Clear();
			
			string mytext = "";
			string myvalue = "";

			form.QFRENOUVELLEMENT.Items.Add(mytext,myvalue);			
			form.QFREPRISEPERSO.Items.Add(mytext,myvalue);			
			
			if (!(string.IsNullOrEmpty(salesOrderItem.ComplementLigneCommande.TYPEBAT)))  
			{
			
				if (salesOrderItem.ComplementLigneCommande.TYPEBAT == "Renouvellement")
				{
					form.QFRENOUVELLEMENT.Visible = true;
					form.QFREPRISEPERSO.Visible = false;

					if (salesOrderItem.ProductName.Contains("calendrier") == true )
					{
						form.QFMODEBAT.Visible = true;
					}
					else
					{
						form.QFMODEBAT.Visible = false;
					}
					
					Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
					using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            		{
            			conn.Open();
						Sql="SELECT NUM_COMMANDE, CONVERT(VARCHAR(10), DATE_PIECE,103) AS MA_DATE, CODE_ARTICLE FROM sysdba.T_HIST_LIGNES_VENTES WHERE ACCOUNTID='" + salesOrderItem.SalesOrder.AccountId.ToString()+ "'  ORDER BY DATE_PIECE DESC, CODE_ARTICLE" ;
					
									
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
							{
								mytext = groupement["NUM_COMMANDE"].ToString() + " - " + groupement["MA_DATE"].ToString()+" - "+ groupement["CODE_ARTICLE"].ToString();
								myvalue = groupement["NUM_COMMANDE"].ToString() + " - " + groupement["MA_DATE"].ToString()+" - "+ groupement["CODE_ARTICLE"].ToString();
								form.QFRENOUVELLEMENT.Items.Add(mytext, myvalue);
								if (!(string.IsNullOrEmpty(salesOrderItem.ComplementLigneCommande.NUMEROREPRISEREN)))  
								{
									if (salesOrderItem.ComplementLigneCommande.NUMEROREPRISEREN == myvalue)
									{
										form.QFRENOUVELLEMENT.SelectedValue = salesOrderItem.ComplementLigneCommande.NUMEROREPRISEREN.ToString();
									}
								}

							}
							
							
					}
				conn.Close();
			}

					
					

				}
				else 
				{
					form.QFRENOUVELLEMENT.Visible = false;
					form.QFREPRISEPERSO.Visible = true;
					form.QFMODEBAT.Visible = true;

					mytext = "";
					myvalue = "";
					form.QFREPRISEPERSO.Items.Add(mytext,myvalue);

					Sage.Platform.Data.IDataService datasvcc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
					using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvcc.GetConnectionString()))
            		{
            			conn.Open();
						Sql="SELECT NUM_COMMANDE, CONVERT(VARCHAR(10), DATE_PIECE,103) AS MA_DATE, CODE_ARTICLE FROM sysdba.T_HIST_LIGNES_VENTES WHERE ACCOUNTID='" + salesOrderItem.SalesOrder.AccountId.ToString()+ "'  ORDER BY DATE_PIECE DESC, CODE_ARTICLE" ;
					
									
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
								{
								mytext = groupement["NUM_COMMANDE"].ToString() + " - " + groupement["MA_DATE"].ToString()+" - "+ groupement["CODE_ARTICLE"].ToString();
								myvalue = groupement["NUM_COMMANDE"].ToString() + " - " + groupement["MA_DATE"].ToString()+" - "+ groupement["CODE_ARTICLE"].ToString();
								form.QFREPRISEPERSO.Items.Add(mytext,myvalue);
								if (!(string.IsNullOrEmpty(salesOrderItem.ComplementLigneCommande.NUMEROCLICHE)))  
								{
									if (salesOrderItem.ComplementLigneCommande.NUMEROCLICHE == myvalue)
									{
										form.QFREPRISEPERSO.SelectedValue = salesOrderItem.ComplementLigneCommande.NUMEROCLICHE.ToString();
									}
								}

									
								}
						}
				conn.Close();
				}


					
					

				}
			}
			else
			{
				form.QFRENOUVELLEMENT.Visible = false;
				form.QFREPRISEPERSO.Visible = false;
					
			}


			form.QFLISTRECTO.Items.Clear();
			form.QFLISTVERSO.Items.Clear();
			mytext = "";
			myvalue = "";
			
			form.QFLISTRECTO.Items.Add(mytext,myvalue);
			form.QFLISTVERSO.Items.Add(mytext,myvalue);									

			Sage.Platform.Data.IDataService datasvci = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvci.GetConnectionString()))
            		{
            			conn.Open();
						Sql="SELECT  [NOM_COULEUR] FROM sysdba.T_COULEURS" ;
					
									
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
								{
								mytext = groupement["NOM_COULEUR"].ToString();
								myvalue = groupement["NOM_COULEUR"].ToString();
								form.QFLISTRECTO.Items.Add(mytext,myvalue);
								form.QFLISTVERSO.Items.Add(mytext,myvalue);									
								}
						}
				conn.Close();
				}

			
			
			
        }
    }
}
