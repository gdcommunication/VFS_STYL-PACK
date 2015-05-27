/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="6c6617a4-affb-4e46-9fb2-93c57876e4fc">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFPAPIER_OnChangeStep</name>
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
        public static void QFPAPIER_OnChangeStep( ITicketDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			ITicket tic = form.CurrentEntity as ITicket;

				if (form.QFPAPIER.Checked.Equals(true))
				{
					tic.UserField6 = "T";
				}
				else 
				{
					tic.UserField6 = "F";
				}
			
        }
    }
}