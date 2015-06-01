/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="409e0bc9-07b7-40a2-a95e-dd0c00556a45">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFLIGNECDE_OnChangeStep</name>
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
    public static partial class TicketDetailsEventHandlers
    {
        public static void QFLIGNECDE_OnChangeStep( ITicketDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			
			ITicket tic = form.CurrentEntity as ITicket;
			if (tic.UserField3!=null)
			{
				if (tic.UserField2!=null)
				{
					
					
					
//Ligne reference
			
					string Sql="";	
					string myref="";
					Sage.Platform.Data.IDataService datasvc = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Data.IDataService>();
					using (System.Data.OleDb.OleDbConnection conn = new System.Data.OleDb.OleDbConnection(datasvc.GetConnectionString()))
            		{
            			conn.Open();
						Sql="SELECT ISNULL(ACTUALID,'') AS RES FROM sysdba.SALESORDERITEMS WHERE SALESORDERID='"+tic.UserField2.ToString()+"' AND LINENUMBER=CASE WHEN ISNUMERIC('"+tic.UserField3.ToString()+"') = 1 THEN '"+tic.UserField3.ToString()+"' ELSE 0 END";
						
						using (System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand(Sql , conn))
                		{          
							System.Data.OleDb.OleDbDataReader groupement = cmd.ExecuteReader();
							while (groupement.Read()) 
							{
								myref = groupement["RES"].ToString();
										
							}

							
					
						}
				
				
						
					
						conn.Close();
					}
			
					form.QFREF.Text=myref;
					
					
					
				}
			}
			
			
			
        }
    }
}
