/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="8e7c419f-31f6-49c4-9a0c-106be54181c3">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>OnLoad1Step</name>
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
    public static partial class histoventesEventHandlers
    {
        public static void OnLoad1Step( Ihistoventes form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			System.Web.UI.WebControls.GridView grid = (System.Web.UI.WebControls.GridView)form.grdTHistoriqueLignesDeVentess.NativeControl;  
			ITHistoriqueLignesDeVentes THistoriqueLignesDeVentes = form.CurrentEntity as ITHistoriqueLignesDeVentes;  
			
			DateTime mon_debut = DateTime.MinValue;
			DateTime ma_fin = DateTime.MaxValue;


			
			//grid.DataSource = THistoriqueLignesDeVentes.FiltrerTeste();
			//grid.DataSource = null;
    		// Call the DataBind method of the GridView to set the binding 
    		grid.DataBind();			

			
			
			
        }
    }
}
