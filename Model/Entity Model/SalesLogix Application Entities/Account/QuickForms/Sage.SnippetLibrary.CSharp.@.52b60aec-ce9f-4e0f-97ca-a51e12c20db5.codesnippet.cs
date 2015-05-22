/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="52b60aec-ce9f-4e0f-97ca-a51e12c20db5">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>QFORIGINE_OnChangeStep</name>
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
    public static partial class histoventesspEventHandlers
    {
        public static void QFORIGINE_OnChangeStep( Ihistoventessp form,  EventArgs args)
        {
            // TODO: Complete business rule implementation
			
			
			
			System.Web.UI.WebControls.GridView grid = (System.Web.UI.WebControls.GridView)form.grdTHistoriqueLignesDeVentess.NativeControl;  
			ITHistoriqueLignesDeVentes THistoriqueLignesDeVentes = form.CurrentEntity as ITHistoriqueLignesDeVentes;  
			string mon_origine = "";
			
			if (form.QFORIGINE.PickListValue != null && form.QFORIGINE.PickListValue != string.Empty)
    		{
        		mon_origine = form.QFORIGINE.PickListValue;
    		}
    		else
			{
				mon_origine = "";
			}
			DateTime mon_debut = DateTime.MinValue;
			if (form.QFSTART.DateTimeValue.ToString() != null && form.QFSTART.DateTimeValue.ToString() != string.Empty)
    		{
        		mon_debut = Convert.ToDateTime(form.QFSTART.DateTimeValue.ToString());
			}
			DateTime ma_fin = DateTime.MaxValue;
			if (form.QFEND.DateTimeValue.ToString() != null && form.QFEND.DateTimeValue.ToString() != string.Empty)
    		{
        		ma_fin = Convert.ToDateTime(form.QFEND.DateTimeValue.ToString());
			}

			
			string ma_gamme = "";
			
			if (form.QFGAMME.PickListValue != null && form.QFGAMME.PickListValue != string.Empty)
    		{
        		ma_gamme = form.QFGAMME.PickListValue;
    		}
    		else
			{
				ma_gamme = "";
			}
			

			string ma_ref = "";
			
			if (form.QFReference.Text != null && form.QFReference.Text != string.Empty)
    		{
        		ma_ref = form.QFReference.Text;
    		}
    		else
			{
				ma_ref = "";
			}
			
			
			form.grdTHistoriqueLignesDeVentess.DataSource = THistoriqueLignesDeVentes.RegleTeste();
			//THistoriqueLignesDeVentes.FiltrerDansHistorique("ABF47A40001A", "", mon_debut, ma_fin, ma_gamme, ma_ref);

    		// Call the DataBind method of the GridView to set the binding 
    		form.grdTHistoriqueLignesDeVentess.DataBind();			
			
			
        }
    }
}
