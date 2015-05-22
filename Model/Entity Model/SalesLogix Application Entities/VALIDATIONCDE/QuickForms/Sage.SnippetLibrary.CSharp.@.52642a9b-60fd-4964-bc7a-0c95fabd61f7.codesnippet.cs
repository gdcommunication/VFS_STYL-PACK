/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="52642a9b-60fd-4964-bc7a-0c95fabd61f7">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFSAVE_OnClickStep</name>
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
using Sage.Platform.WebPortal.Services;
using Sage.Platform;

#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class RaisonsBlocageEventHandlers
    {
        public static void QFSAVE_OnClickStep( IRaisonsBlocage form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			IVALIDATIONCDE validation = form.CurrentEntity as IVALIDATIONCDE;

			IWebDialogService dialogService = form.Services.Get<IWebDialogService>();

			Sage.SalesLogix.Security.SLXUserService usersvc = (Sage.SalesLogix.Security.SLXUserService)Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.Security.IUserService>();
			Sage.Entity.Interfaces.IUser user = usersvc.GetUser();
			
			Sage.Entity.Interfaces.ISalesOrder salesOrder = dialogService.DialogParameters["salesOrder"] as ISalesOrder;
			
			validation.Salesorderid = salesOrder.Id.ToString();
			validation.CreateDate = DateTime.UtcNow ;
			validation.DateBlocage = DateTime.UtcNow ;
			validation.Debloquee = 0;
			validation.Utilblocage = user.UserName.ToString();
			validation.Save();
        }
    }
}
