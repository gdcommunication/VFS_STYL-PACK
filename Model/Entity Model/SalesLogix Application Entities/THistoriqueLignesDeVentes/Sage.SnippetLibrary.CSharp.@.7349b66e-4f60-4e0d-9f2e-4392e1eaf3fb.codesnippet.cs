/*
 * Cette métadonnée est utilisée par la plateforme Sage.  Ne pas supprimer.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="7349b66e-4f60-4e0d-9f2e-4392e1eaf3fb">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>FiltrerDansHistoriqueStep</name>
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
        public static void FiltrerDansHistoriqueStep( ITHistoriqueLignesDeVentes thistoriquelignesdeventes,  String accountid,  String societe,  DateTime debut,  DateTime fin, String gamme, String reference, out System.Collections.Generic.IList<Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes> result)
        {
            // TODO: Complete business rule implementation
			
			Sage.Platform.Repository.IRepository<Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes> repository =  Sage.Platform.EntityFactory.GetRepository<Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes>();			
            IQueryable qry = (IQueryable)repository;

            IExpressionFactory ef = qry.GetExpressionFactory();
            
            ICriteria criteria = qry.CreateCriteria();

			int	myres = 0;

			if ( societe != "" )
			{
				myres = myres + 1;
			}

			if ( (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "") )
			{
				myres = myres + 1;
			}

			if ( gamme != "" )
			{
				myres = myres + 1;
			}
			
			if ( reference != "" )
			{
				myres = myres + 1;
			}

			switch (myres)
			{
				case 4:
//SPGR
					if ( (societe != "")  && (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  && (gamme != "")  && (reference != ""))
					{
						criteria.Add(ef.Conjunction()
							.Add(ef.Eq("Accountid",accountid))
							.Add(ef.Eq("ORIGINE", societe))
							.Add(ef.Between("Date_piece", debut, fin))
							.Add(ef.Eq("GAMME", gamme))
							.Add(ef.Eq("Code_article", reference))
						);
					
				
					}		
					break;
					
					
				case 3:
//SPG
					if ( (societe != "")  && (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  && (gamme != "") )
					{
						criteria.Add(ef.Conjunction()
							.Add(ef.Eq("Accountid",accountid))
							.Add(ef.Eq("ORIGINE", societe))
							.Add(ef.Between("Date_piece", debut, fin))
							.Add(ef.Eq("GAMME", gamme))
					
						);
					
				
					}
					else
					{
//SPR
						if ( (societe != "")  && (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  && (reference != ""))
						{
							criteria.Add(ef.Conjunction()
								.Add(ef.Eq("Accountid",accountid))
								.Add(ef.Eq("ORIGINE", societe))
								.Add(ef.Between("Date_piece", debut, fin))
								.Add(ef.Eq("Code_article", reference))
							);
					
				
						}
						
						else
						{
//SGR
							if ( (societe != "")  && (gamme != "")  && (reference != ""))
							{
								criteria.Add(ef.Conjunction()
									.Add(ef.Eq("Accountid",accountid))
									.Add(ef.Eq("ORIGINE", societe))
									.Add(ef.Eq("GAMME", gamme))
									.Add(ef.Eq("Code_article", reference))
								);
					
				
							}
							else
							{
            
//PGR
								if ( (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  && (gamme != "")  && (reference != ""))
								{
									criteria.Add(ef.Conjunction()
										.Add(ef.Eq("Accountid",accountid))
										.Add(ef.Between("Date_piece", debut, fin))
										.Add(ef.Eq("GAMME", gamme))
										.Add(ef.Eq("Code_article", reference))
									);
					
				
								}
								
								
								
							}	
						}
					}
					
					break;
					
					
					
				case 2:
					
//SP
					if ( (societe != "")  && (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "") )
					{
						criteria.Add(ef.Conjunction()
							.Add(ef.Eq("Accountid",accountid))
							.Add(ef.Eq("ORIGINE", societe))
							.Add(ef.Between("Date_piece", debut, fin))
						);
					
				
					}
					else
					{
//SG
						if ( (societe != "")  && (gamme != "") )
						{
							criteria.Add(ef.Conjunction()
								.Add(ef.Eq("Accountid",accountid))
								.Add(ef.Eq("ORIGINE", societe))
								.Add(ef.Eq("GAMME", gamme))
							);
					
				
						}
						else
						{
						
//SR
							if ( (societe != "") && (reference != ""))
							{
								criteria.Add(ef.Conjunction()
									.Add(ef.Eq("Accountid",accountid))
									.Add(ef.Eq("ORIGINE", societe))
									.Add(ef.Eq("Code_article", reference))
								);
					
				
							}
							else
							{
							

//PG
								if ( (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  && (gamme != "") )
								{
									criteria.Add(ef.Conjunction()
										.Add(ef.Eq("Accountid",accountid))
										.Add(ef.Between("Date_piece", debut, fin))
										.Add(ef.Eq("GAMME", gamme))
									);
					
				
								}
								else
								{
								

//PR
									if ( (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  && (reference != ""))
									{
										criteria.Add(ef.Conjunction()
											.Add(ef.Eq("Accountid",accountid))
											.Add(ef.Between("Date_piece", debut, fin))
											.Add(ef.Eq("Code_article", reference))
										);
					
				
									}
									else
									{

//GR
										if ( (gamme != "")  && (reference != ""))
										{
											criteria.Add(ef.Conjunction()
												.Add(ef.Eq("Accountid",accountid))
												.Add(ef.Eq("GAMME", gamme))
												.Add(ef.Eq("Code_article", reference))
											);
					
				
										}
										
										
									}	
								}			
							}
						}
					}
					break;
					
				case 1:
//S
					if ( (societe != "")  )
					{
						criteria.Add(ef.Conjunction()
							.Add(ef.Eq("Accountid",accountid))
							.Add(ef.Eq("ORIGINE", societe))
						);
					
				
					}	
					else
					{

//P		
					
						if ( (debut.ToShortDateString() != "") && (fin.ToShortDateString() != "")  )
						{
							criteria.Add(ef.Conjunction()
								.Add(ef.Eq("Accountid",accountid))
								.Add(ef.Between("Date_piece", debut, fin))
							);
					
				
						}		
						else
						{

//G
							if ( (gamme != "") )
							{
								criteria.Add(ef.Conjunction()
									.Add(ef.Eq("Accountid",accountid))
									.Add(ef.Eq("GAMME", gamme))
								);
					
				
							}		
							else
							{

//R
								if ( (reference != ""))
								{
									criteria.Add(ef.Conjunction()
										.Add(ef.Eq("Accountid",accountid))
										.Add(ef.Eq("Code_article", reference))
									);
					
				
								}		
								
								
								
							}	
						}		
					}	
					
					break;

					
				default:
					criteria.Add(ef.Eq("Accountid",accountid));
					break;
			}
			

													
												
            result = criteria.List<ITHistoriqueLignesDeVentes>();

			
        }
    }
}