/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="05b2ccff-72c4-46fb-b8d6-1951ebd38637">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFECHANTILLON_OnChangeStep</name>
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
        public static void QFECHANTILLON_OnChangeStep( ITicketDetails form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			ITicket tic = form.CurrentEntity as ITicket;

				if (form.QFECHANTILLON.Checked.Equals(true))
				{
					tic.UserField8 = "T";
				}
				else 
				{
					tic.UserField8 = "F";
				}
			
        }
    }
}