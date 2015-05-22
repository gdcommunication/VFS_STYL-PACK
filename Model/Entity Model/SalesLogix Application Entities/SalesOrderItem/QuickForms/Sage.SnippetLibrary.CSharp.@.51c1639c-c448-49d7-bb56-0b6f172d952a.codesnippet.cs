/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="51c1639c-c448-49d7-bb56-0b6f172d952a">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFPAOMODIF1_OnChangeStep</name>
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
    public static partial class EditSalesOrderItemEventHandlers
    {
        public static void QFPAOMODIF1_OnChangeStep( IEditSalesOrderItem form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			ISalesOrderItem salesOrderItem = form.CurrentEntity as ISalesOrderItem;			
			salesOrderItem.ComplementLigneCommande.PAOMODIF1DATE = DateTime.UtcNow ;
			form.QFMultiDonnees.ActivePageIndex = 1 ;			

			
			
        }
    }
}