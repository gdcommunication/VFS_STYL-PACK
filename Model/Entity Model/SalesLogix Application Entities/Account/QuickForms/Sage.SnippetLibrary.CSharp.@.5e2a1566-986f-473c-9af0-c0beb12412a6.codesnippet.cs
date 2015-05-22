/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="5e2a1566-986f-473c-9af0-c0beb12412a6">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad1Step</name>
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
    public static partial class AccountExtendedDetailsEventHandlers
    {
        public static void OnLoad1Step( IAccountExtendedDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			Sage.Entity.Interfaces.IAccount acc=form.CurrentEntity as Sage.Entity.Interfaces.IAccount;
			Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
			using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
			{
				form.QFImage.Visible = false;
				if (!(string.IsNullOrEmpty(form.QFTextBox4.Text)))
				{

				conn.Open();
				string Sql="SELECT CASE  WHEN LEN('"+form.QFTextBox4.Text +"')<>23 AND LEN('"+form.QFTextBox4.Text +"')>0 THEN '0' WHEN LEN('"+form.QFTextBox4.Text+"')=0 THEN '1'  ELSE CASE WHEN  CAST(RIGHT('"+form.QFTextBox4.Text+"',2) AS int) = (97 - (62*CAST(LEFT(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(LEFT('"+form.QFTextBox4.Text+"',LEN('"+form.QFTextBox4.Text+"')-2),'A','1'),'B','2'),'C','3'),'D','4'),'E','5'),'F','6'),'G','7'),'H','8'),'I','9'),'J','1'),'K','2'),'L','3'),'M','4'),'N','5'),'O','6'),'P','7'),'Q','8'),'R','9'),' ','1'),'S','2'),'T','3'),'U','4'),'V','5'),'W','6'),'X','7'),'Y','8'),'Z','9'),7) as decimal) + 34*CAST(LEFT(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(LEFT('"+form.QFTextBox4.Text+"',LEN('"+form.QFTextBox4.Text+"')-2),'A','1'),'B','2'),'C','3'),'D','4'),'E','5'),'F','6'),'G','7'),'H','8'),'I','9'),'J','1'),'K','2'),'L','3'),'M','4'),'N','5'),'O','6'),'P','7'),'Q','8'),'R','9'),' ','1'),'S','2'),'T','3'),'U','4'),'V','5'),'W','6'),'X','7'),'Y','8'),'Z','9'),LEFT(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(LEFT('"+form.QFTextBox4.Text+"',LEN('"+form.QFTextBox4.Text+"')-2),'A','1'),'B','2'),'C','3'),'D','4'),'E','5'),'F','6'),'G','7'),'H','8'),'I','9'),'J','1'),'K','2'),'L','3'),'M','4'),'N','5'),'O','6'),'P','7'),'Q','8'),'R','9'),' ','1'),'S','2'),'T','3'),'U','4'),'V','5'),'W','6'),'X','7'),'Y','8'),'Z','9'),7),''),7) AS decimal) + 3*CAST(RIGHT(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(LEFT('"+form.QFTextBox4.Text+"',LEN('"+form.QFTextBox4.Text+"')-2),'A','1'),'B','2'),'C','3'),'D','4'),'E','5'),'F','6'),'G','7'),'H','8'),'I','9'),'J','1'),'K','2'),'L','3'),'M','4'),'N','5'),'O','6'),'P','7'),'Q','8'),'R','9'),' ','1'),'S','2'),'T','3'),'U','4'),'V','5'),'W','6'),'X','7'),'Y','8'),'Z','9'),7) as decimal))% 97)  THEN '1'  ELSE '0' END  END  AS Res";
				using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                    {
						System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
						while (groupement.Read()) 
							{
								if (groupement["Res"].ToString() == "0")
								{
									form.QFImage.Visible = true;
								}
								else
								{
									form.QFImage.Visible = false;
								}
								
							}
					}
				conn.Close();
				}
			}
        }
    }
}
