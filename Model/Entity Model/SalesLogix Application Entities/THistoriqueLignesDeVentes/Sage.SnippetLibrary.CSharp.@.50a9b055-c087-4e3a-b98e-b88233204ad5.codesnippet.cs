/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="50a9b055-c087-4e3a-b98e-b88233204ad5">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>FiltrerTesteStep</name>
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
using Sage.Platform;
using Sage.Platform.Repository;
using Sage.Form.Interfaces;
using Sage.SalesLogix.API;
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class THistoriqueLignesDeVentesBusinessRules
    {
        public static void FiltrerTesteStep( ITHistoriqueLignesDeVentes thistoriquelignesdeventes, out System.Collections.IList result)
        {
            // TODO: Complete business rule implementation
			//result = new List<object>();
			//Sage.Platform.Repository.IRepository<Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes> repository =  Sage.Platform.EntityFactory.GetRepository<Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes>();			
			//IRepository repository = EntityFactory.GetRepository();
            //IQueryable qry = (IQueryable)repository;
            
			//IExpressionFactory ef = qry.GetExpressionFactory();
            
            //ICriteria criteria = qry.CreateCriteria();
			//criteria.Add(ef.Like("Num_commande","%0%"));
			//criteria.Add(ef.Eq("Accountid","ABF47A40001A"));
			//result = new System.Collections.Generic.List<ITHistoriqueLignesDeVentes>();
			//System.Collections.IList newlist = criteria.List();

			//System.Collections.IList result1 = null;
			//string[] propertyPaths = new String[] {"Date_piece", "Num_commande", "Code_article", "GAMME", "Quantite_commandee", "Quantite_livree", "RAE", "Prix_unitaire", "Couleurs_recto", "Couleurs_verso", "Montant_ht", "Date_livraison_prevue", "LIVRAISONREELLE", "ORIGINE", "NBCOLIS", "BONLIVRAISON", "FACTURE", "LIENBAT", "LIENCATALOGUE", "TRANSPORTEUR", "Code_representant"};
			//foreach (object[] data in newlist)
			//{
			//	Sage.Platform.ComponentModel.ComponentView componentView= new Sage.Platform.ComponentModel.ComponentView(propertyPaths,data);
				//result1.Add(componentView);
			//}
			result=null;
			
        }
    }
}
