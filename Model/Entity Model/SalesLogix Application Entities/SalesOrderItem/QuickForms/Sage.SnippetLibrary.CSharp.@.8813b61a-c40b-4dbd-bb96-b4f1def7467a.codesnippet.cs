/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="8813b61a-c40b-4dbd-bb96-b4f1def7467a">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>numQuantity_OnChangeStep</name>
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
    public static partial class EditSalesOrderItemEventHandlers
    {
        public static void numQuantity_OnChangeStep( IEditSalesOrderItem form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			ISalesOrderItem salesOrderItem = form.CurrentEntity as ISalesOrderItem;			
			
			if ((salesOrderItem.Quantity != null) && (salesOrderItem.Quantity !=0) && (((salesOrderItem.CalculatedPrice != null) && (salesOrderItem.CalculatedPrice !=0)) ||  ((salesOrderItem.Price != null) && (salesOrderItem.Price !=0))))
			{
				if ((salesOrderItem.Price != null) && (salesOrderItem.Price !=0))
				{
					salesOrderItem.CalculatedPrice = (decimal)((double)salesOrderItem.Price * (1 - (double)salesOrderItem.Discount));
				}
				else
				{
					salesOrderItem.Price = (double)salesOrderItem.CalculatedPrice / (double)(1 - salesOrderItem.Discount);
				}
				
				
				if (salesOrderItem.Product.Unit == "1000")
				{
					salesOrderItem.ExtendedPrice = salesOrderItem.Quantity * salesOrderItem.Price * (1 - salesOrderItem.Discount)/1000;
				}
				else 
				{
					salesOrderItem.ExtendedPrice = salesOrderItem.Quantity * salesOrderItem.Price * (1 - salesOrderItem.Discount);
				}
				
			}

			
			
        }
    }
}
