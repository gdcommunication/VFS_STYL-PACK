/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="ed0a04e1-5830-4c91-819e-19e8d918128a">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>cmdSave_OnClickStep</name>
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
    public static partial class TicketDetailsEventHandlers
    {
        public static void cmdSave_OnClickStep( ITicketDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			ITicket tic = form.CurrentEntity as ITicket;
			
			Sage.SalesLogix.Security.SLXUserService usersvc = (Sage.SalesLogix.Security.SLXUserService)Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Security.IUserService>();
			Sage.Entity.Interfaces.IUser user = usersvc.GetUser();			
			
			if (tic.StatusCode.ToString() == "k6UJ9A000037")
			{
				tic.CompletedDate = DateTime.UtcNow.ToLocalTime() ;
				tic.CompletedById = user.Id.ToString();	
				tic.Closed = true;
			}
			else 
			{
				tic.CompletedDate = null ;
				tic.CompletedById = null;	
				tic.Closed=null;
			}
			
			tic.Save();
			
			

        }
    }
}
