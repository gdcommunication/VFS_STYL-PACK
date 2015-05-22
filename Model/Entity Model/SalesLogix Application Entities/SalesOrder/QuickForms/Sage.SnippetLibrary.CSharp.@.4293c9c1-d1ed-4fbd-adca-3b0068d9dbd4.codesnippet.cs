/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="4293c9c1-d1ed-4fbd-adca-3b0068d9dbd4">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>btnSave_OnClickStep</name>
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
using System.Web;
using Sage.Entity.Interfaces;
using Sage.Form.Interfaces;
using Sage.SalesLogix.API;
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
	/// <summary>
	/// This method is invoked when selecting the toolbar button to add  'Save' the Sales Order.
	/// </summary>
    public static partial class InsertSalesOrderEventHandlers
    {
		/// <summary>
		/// Assigns the Sales Order type.
		/// </summary>
		/// <param name="form">The Insert Sales Order form.</param>
		/// <param name="args">The <see cref="System.EventArgs"/> instance containing the event data.</param>
        public static void btnSave_OnClickStep(IInsertSalesOrder form, EventArgs args)
        {
            ISalesOrder salesOrder = form.CurrentEntity as ISalesOrder;
			if (salesOrder != null)
            {
				string selectedValue = form.rdgSOType.SelectedValue;
				if (selectedValue.Equals("SalesOrder"))
				{
					salesOrder.IsQuote = false;
				}
				else if (selectedValue.Equals("Quote"))
				{
					salesOrder.IsQuote = true;
				}
				
				
				if (form.QFTextBox3.Checked.Equals(false))
				{
					salesOrder.ComplementCommande.RAPIDO = "0";
				}
				else 
				{
					salesOrder.ComplementCommande.RAPIDO = "1";
				}

				
				if (form.QFQTEEXACTE.Checked.Equals(false))
				{
					salesOrder.ComplementCommande.QTEEXACTE = 0;
				}
				else 
				{
					salesOrder.ComplementCommande.QTEEXACTE = 1;
				}

				
				
				
				
//Enregistrer les informations de paiement				
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
				
				
				
				
				
				
				salesOrder.Save();
				HttpContext.Current.Response.Redirect(string.Format("SalesOrder.aspx?entityId={0}", salesOrder.Id.ToString()), false);
			}
        }
    }
}
