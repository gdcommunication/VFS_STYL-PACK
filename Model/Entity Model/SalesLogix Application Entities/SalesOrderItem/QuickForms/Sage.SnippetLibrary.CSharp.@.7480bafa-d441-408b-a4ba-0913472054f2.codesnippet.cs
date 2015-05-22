/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="7480bafa-d441-408b-a4ba-0913472054f2">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFLISTVERSO_OnChangeStep</name>
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
        public static void QFLISTVERSO_OnChangeStep( IEditSalesOrderItem form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			ISalesOrderItem salesOrderItem = form.CurrentEntity as ISalesOrderItem;					
			if (form.QFLISTVERSO.Text.ToString().Length != 0) 
			{
			if (!(string.IsNullOrEmpty(salesOrderItem.ComplementLigneCommande.COULEURSVERSO)))  
			{
				salesOrderItem.ComplementLigneCommande.COULEURSVERSO = salesOrderItem.ComplementLigneCommande.COULEURSVERSO.ToString() + "; " + form.QFLISTVERSO.Text.ToString();
			}
			else
			{
				salesOrderItem.ComplementLigneCommande.COULEURSVERSO = form.QFLISTVERSO.Text.ToString();
			
			}
			}
			
			
        }
    }
}