/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="2806ddfe-c918-41ec-92a7-ea4d2f15845a">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFSLXLookup_OnChangeStep</name>
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
    public static partial class InsertTicketEventHandlers
    {
        public static void QFSLXLookup_OnChangeStep( IInsertTicket form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			ITicket tic = form.CurrentEntity as ITicket;

			if (tic.UserField3!=null)
			{
				if (tic.UserField2!=null)
				{
					form.QFInformer.Enabled=true;	
				}
			}
        }
    }
}