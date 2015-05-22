/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="dd3c103e-bcb8-428b-adef-a309633ae91f">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFNEWREASON_OnClickStep</name>
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
    public static partial class ListeBlocagesEventHandlers
    {
        public static void QFNEWREASON_OnClickStep( IListeBlocages form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
            ISalesOrder salesOrder = form.CurrentEntity as ISalesOrder;
            if (salesOrder != null)
            {
                IWebDialogService dialogService = form.Services.Get<IWebDialogService>();
                if (dialogService != null)
                {
                    string dialogCaption = String.Format(form.GetResource("QFNEWREASON.Caption").ToString(), salesOrder.SalesOrderNumber);
					dialogService.SetSpecs(20, 20, 325, 700, "RaisonsBlocage", dialogCaption, true);
                    dialogService.DialogParameters.Add("salesOrder", salesOrder);
                    dialogService.EntityType = typeof(IVALIDATIONCDE);
                    dialogService.ShowDialog();
                }
            }

			
			
        }
    }
}
