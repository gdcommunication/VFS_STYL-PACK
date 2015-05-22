/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="b2cf2e66-7233-49e7-84e8-66e2cf7266f7">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad1Step</name>
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
    public static partial class PastillesEventHandlers
    {
        public static void OnLoad1Step( IPastilles form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			Sage.Entity.Interfaces.IAccount acc=form.CurrentEntity as Sage.Entity.Interfaces.IAccount;
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            {
                conn.Open();

				if (!(string.IsNullOrEmpty(acc.ACCID)))
				{
				
					string Sql = "select CASE WHEN DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE())<=12 THEN 12 WHEN ((DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE()))<=18) AND (INDUSTRY='PHARMACIE') THEN 18 WHEN ((DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE()))<=24) AND (INDUSTRY<>'PHARMACIE') THEN 24 WHEN ((DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE()))<=36)  THEN 36 ELSE 0 END  AS Total, ORIGINE, MAX(DATE_PIECE) AS Last_order, INDUSTRY, CASE WHEN DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE())<=12 THEN 'VERT' WHEN ((DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE()))<=18) AND (INDUSTRY='PHARMACIE') THEN 'JAUNE' WHEN ((DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE()))<=24) AND (INDUSTRY<>'PHARMACIE') THEN 'JAUNE' WHEN ((DATEDIFF(m,ISNULL(MAX(DATE_PIECE),0),GETDATE()))<=36)  THEN 'ROUGE' ELSE 'EXCLU' END AS Statu FROM sysdba.T_HIST_LIGNES_VENTES T_HIST_LIGNES_VENTES INNER JOIN sysdba.ACCOUNT ACCOUNT ON T_HIST_LIGNES_VENTES.ACCOUNTID = ACCOUNT.ACCOUNTID Where ACCOUNTID='" + acc.ACCID.ToString()  +"' group by T_HIST_LIGNES_VENTES.ACCOUNTID, ACCOUNT.INDUSTRY, T_HIST_LIGNES_VENTES.ORIGINE";
                    using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                    {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{
								
									if (groupement["ORIGINE"].ToString() == "SP")
									{
										form.QFCASP.Text = groupement["Total"].ToString();
										if (groupement["Statu"].ToString() == "VERT")
										{
											form.QFSPVERT.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "JAUNE")
										{
											form.QFSPJAUNE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "ROUGE")
										{
											form.QFSPROUGE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "EXCLU")
										{
											form.QFSPEXCLU.Visible = true; 
										}
										
										
									}
									if (groupement["ORIGINE"].ToString() == "PAP")
									{
										form.QFCAPAP.Text = groupement["Total"].ToString();
										if (groupement["Statu"].ToString() == "VERT")
										{
											form.QFPAPVERT.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "JAUNE")
										{
											form.QFPAPJAUNE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "ROUGE")
										{
											form.QFPAPROUGE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "EXCLU")
										{
											form.QFPAPEXCLU.Visible = true; 
										}
										
										
									}
									if (groupement["ORIGINE"].ToString() == "PAV")
									{
										form.QFCAPAV.Text = groupement["Total"].ToString();
										if (groupement["Statu"].ToString() == "VERT")
										{
											form.QFPAVVERT.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "JAUNE")
										{
											form.QFPAVJAUNE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "ROUGE")
										{
											form.QFPAVROUGE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "EXCLU")
										{
											form.QFPAVEXCLU.Visible = true; 
										}
										
										
									}
									if (groupement["ORIGINE"].ToString() == "CDO")
									{
										form.QFCACDO.Text = groupement["Total"].ToString();
										if (groupement["Statu"].ToString() == "VERT")
										{
											form.QFCDOVERT.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "JAUNE")
										{
											form.QFCDOJAUNE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "ROUGE")
										{
											form.QFCDOROUGE.Visible = true; 
										}
										if (groupement["Statu"].ToString() == "EXCLU")
										{
											form.QFCDOEXCLU.Visible = true; 
										}
										
										
									}

									
									
									
									
									
							}
						
                    }
					string mysql = "";
					if (!(string.IsNullOrEmpty(form.QFCASP.Text)))
					{
						mysql = mysql + " and CASE WHEN (DATEDIFF(m,ISNULL((DATE_PIECE),0),GETDATE())<=" +form.QFCASP.Text.ToString()+") and (ORIGINE='SP') THEN 1 ELSE 0 END=1";
					}
					if (!(string.IsNullOrEmpty(form.QFCAPAP.Text)))
					{
						mysql = mysql + " and CASE WHEN (DATEDIFF(m,ISNULL((DATE_PIECE),0),GETDATE())<=" +form.QFCAPAP.Text.ToString()+") and (ORIGINE='PAP') THEN 1 ELSE 0 END=1";
					}
					if (!(string.IsNullOrEmpty(form.QFCAPAV.Text)))
					{
						mysql = mysql + " and CASE WHEN (DATEDIFF(m,ISNULL((DATE_PIECE),0),GETDATE())<=" +form.QFCAPAV.Text.ToString()+") and (ORIGINE='PAV') THEN 1 ELSE 0 END=1";
					}
					if (!(string.IsNullOrEmpty(form.QFCACDO.Text)))
					{
						mysql = mysql + " and CASE WHEN (DATEDIFF(m,ISNULL((DATE_PIECE),0),GETDATE())<=" +form.QFCACDO.Text.ToString()+") and (ORIGINE='CDO') THEN 1 ELSE 0 END=1";
					}
					
					Sql = "select Sum(MONTANT_HT) AS Total, ORIGINE FROM sysdba.T_HIST_LIGNES_VENTES T_HIST_LIGNES_VENTES Where ACCOUNTID='" + acc.ACCID.ToString()  +"'"+mysql+" group by T_HIST_LIGNES_VENTES.ACCOUNTID, T_HIST_LIGNES_VENTES.ORIGINE";
                    using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                    {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{
								if (groupement["ORIGINE"].ToString() == "SP")
								{
										form.QFCASP.Text = groupement["Total"].ToString();
								}
								if (groupement["ORIGINE"].ToString() == "PAP")
								{
										form.QFCAPAP.Text = groupement["Total"].ToString();
								}
								if (groupement["ORIGINE"].ToString() == "PAV")
								{
										form.QFCAPAV.Text = groupement["Total"].ToString();
								}
								if (groupement["ORIGINE"].ToString() == "CDO")
								{
										form.QFCACDO.Text = groupement["Total"].ToString();
								}

								
							}
					}
					
					
		//chargement de 12MOISGLISSANTS	
				Sql="SELECT Max(ISNULL(CA_12_MOIS,0)) AS CA12 FROM sysdba.T_HIST_LIGNES_VENTES WHERE ACCOUNTID = '" + acc.ACCID.ToString() + "'" ;
					
									
				using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                  {          
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{						
								form.QFCA12MOIS.Text = groupement["CA12"].ToString();
							}
					
					}					
					
				}
				conn.Close();
				
			}

			
			
			
        }
    }
}
