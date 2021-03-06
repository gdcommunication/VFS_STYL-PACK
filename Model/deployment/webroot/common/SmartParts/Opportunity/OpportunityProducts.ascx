<%@ Control Language="C#" ClassName="OpportunityProducts" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
<%@ Register Assembly="Sage.SalesLogix.Client.GroupBuilder" Namespace="Sage.SalesLogix.Client.GroupBuilder" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.PickList" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.DependencyLookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Lookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Timeline" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.HighLevelTypes" Namespace="Sage.SalesLogix.HighLevelTypes" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.Platform.WebPortal" Namespace="Sage.Platform.WebPortal.SmartParts" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.ScriptResourceProvider" TagPrefix="Saleslogix" %>

<%//------------------------------------------------------------------------
//This file was generated by a tool.  Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//------------------------------------------------------------------------ %>
   <%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.ScriptResourceProvider" TagPrefix="SalesLogix" %>
  <%--Grid style overrides for quickform configurations and textbox compatibility with IE7.--%>
<style 
type="text/css">     
    .alignleft { text-align : left; }
    .alignright { text-align : right; }
    .aligncenter { text-align : center; }
	.dijitTextBox { width: auto; }
	.ISOSpace {width: 75% !important; }
</style>

	  			

<SalesLogix:ScriptResourceProvider ID="OpportunityProductslueProduct_Strings" runat="server">
    <Keys>
        <SalesLogix:ResourceKeyName Key="lueProduct.ButtonTooltip" />
        <SalesLogix:ResourceKeyName Key="lueProduct.LookupDialogTitle" />
        <SalesLogix:ResourceKeyName Key="lueProduct.DialogButtonText" />
						<SalesLogix:ResourceKeyName Key="lueProduct.LookupProperties.Name.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueProduct.LookupProperties.Family.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueProduct.LookupProperties.Status.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueProduct.LookupProperties.ActualId.PropertyHeader" />
		       </Keys>
</SalesLogix:ScriptResourceProvider>

	  	  	   

<SalesLogix:ScriptResourceProvider ID="OpportunityProductsgrdOppProducts_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdOppProducts.6ef4d952-2b1a-4d9f-a36e-35a942dd32bb.ColumnHeading" />
        <SalesLogix:ResourceKeyName Key="grdOppProducts.6ef4d952-2b1a-4d9f-a36e-35a942dd32bb.Text" />
<SalesLogix:ResourceKeyName Key="38611e40-47c3-4f73-88e1-62bfa47171a4.DialogTitleOverride" />   <SalesLogix:ResourceKeyName Key="grdOppProducts.33816379-5ee4-4a9d-850c-ce5518934f95.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.5e29a114-4a97-45a3-9db6-2d0b10fd74dd.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.89fb1ecc-72a4-4f09-921b-29a9175daf56.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.a85f781e-8ec4-4eb2-959b-8d969ef1d648.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.6a57e635-5b9d-48b1-a5ec-baf4745cc0c4.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.a4c903b4-ff1a-4479-a402-caae0353699e.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.6a6d5c85-c8d6-4660-9f10-3855008c45ca.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.0723086e-115c-4d05-aa21-e047d57c316a.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.bdcfebf2-8c54-459a-97ec-00e4d92f86dc.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.8b5cf516-7850-47e3-b512-402fe221806c.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOppProducts.ceb64e60-2b36-42fe-8a84-491ad1bf158d.ColumnHeading" />
           <SalesLogix:ResourceKeyName Key="grdOppProducts.Save.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdOppProducts.Relate.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdOppProducts.Cancel.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdOppProducts.Delete.ToolTip" />
     </Keys>
</SalesLogix:ScriptResourceProvider>

										
		
		
		
		

																					
			
			
			
			
			
			
			
			
			
			
			
			
			
																							 





























<div style="display:none;">
  <asp:TextBox runat="server" ID="OpportunityProductsgrdOppProducts_DataCarrier" class="OpportunityProductsgrdOppProducts_DataCarrier" ></asp:TextBox>
</div>
  <div id="OpportunityProductsgrdOppProducts_Container" style="width:100%;height:100%;" class="">
    <div id="OpportunityProductsgrdOppProducts_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>


 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="OpportunityProducts_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=OpportunityProducts&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkOpportunityProductsHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="OpportunityProducts" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
 </SalesLogix:SmartPartToolsContainer>

<SalesLogix:ScriptResourceProvider ID="OpportunityProductsResources" runat="server">
<Keys>
			<SalesLogix:ResourceKeyName Key="error_AccountingSystem_Undefined" />
			<SalesLogix:ResourceKeyName Key="error_ClientContext_Undefined" />
			<SalesLogix:ResourceKeyName Key="error_ExecutingRequest" />
			<SalesLogix:ResourceKeyName Key="error_ExecutingRequest_Ext" />
			<SalesLogix:ResourceKeyName Key="error_OperatingCompany_Undefined" />
			<SalesLogix:ResourceKeyName Key="error_ZeroBasePrice" />
	</Keys>
</SalesLogix:ScriptResourceProvider>


<script runat="server" type="text/C#">
/// <summary>
/// Gets or sets the role security service.
/// </summary>
/// <value>The role security service.</value>
[Sage.Platform.Application.ServiceDependency]
public Sage.Platform.Security.IRoleSecurityService RoleSecurityService { get; set; }

public override Type EntityType
{
    get { return typeof(Sage.Entity.Interfaces.IOpportunity); }
}

 

protected override void OnAddEntityBindings() {
    
   
}
       
protected void grdOppProducts_InsertAssociationAction(object sender, EventArgs e) {

	    string text = Request.Form.Get(OpportunityProductsgrdOppProducts_DataCarrier.UniqueID);
    if (text.Length > 0)
    {
    var feed = new Sage.Integration.Entity.Feeds.OpportunityProductFeed();

		using (var stream = new System.IO.MemoryStream(Encoding.UTF8.GetBytes(text)))
		{
			new Sage.Common.Syndication.JsonSerializer().LoadFromStream<Sage.Integration.Entity.Feeds.OpportunityProductEntry>(feed, stream);
		}

		if (feed == null) return;
		var transformer =
			Sage.Platform.Application.ApplicationContext.Current.Services.Get
				<Sage.Platform.SData.IAtomEntryToEntityTransformationService>();
    	
		var entity = BindingSource.Current as Sage.Entity.Interfaces.IOpportunity;

		if (transformer != null && entity != null && entity.Products.Count == 0)
		{
			foreach (Sage.Integration.Entity.Feeds.OpportunityProductEntry entry in feed.Entries)
			{
				var item = transformer.ConvertEntry(entry) as Sage.Entity.Interfaces.IOpportunityProduct;
				if (item != null)
				{
					item.Opportunity = entity;
					entity.Products.Add(item);
				}
			}
			entity.Persisted -= grdOppProducts_InsertAssociationAction;
			entity.Save();
		}
	}



}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 var epage = Page as Sage.Platform.WebPortal.EntityPage;
 if (epage != null && epage.IsInsertMode)
 {
     var ent = BindingSource.Current as Sage.Platform.Orm.Interfaces.IPersistentEntity;
     if (ent != null)
     {
         ent.Persisted += grdOppProducts_InsertAssociationAction;
     }
 }


}

protected void quickformload0(object sender, EventArgs e) {
Sage.Entity.Interfaces.IOpportunity opportunity = this.BindingSource.Current as Sage.Entity.Interfaces.IOpportunity;
if (opportunity != null)
{
    Sage.Platform.SData.IAppIdMappingService mappingService =
        Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.SData.IAppIdMappingService>(
            true);
	if (mappingService.IsIntegrationEnabled())
	{
		var clientContextService = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.ClientContextService>();
		if (clientContextService != null)
		{
			// OperatingCompany
			if (clientContextService.CurrentContext.ContainsKey("OperatingCompany"))
			{
                if (opportunity.OperatingCompany != null)
                {
				    clientContextService.CurrentContext["OperatingCompany"] = opportunity.OperatingCompany.Id.ToString();
                }
                else
                {
                    clientContextService.CurrentContext.Remove("OperatingCompany");
                }
			}
			else
			{
                if (opportunity.OperatingCompany != null)
                {
                    clientContextService.CurrentContext.Add("OperatingCompany", opportunity.OperatingCompany.Id.ToString());
                }
			}
			
			// SlxPriceList
			if (clientContextService.CurrentContext.ContainsKey("SlxPriceList"))
			{
                if (opportunity.SlxPriceList != null)
                {
				    clientContextService.CurrentContext["SlxPriceList"] = opportunity.SlxPriceList.Id.ToString();
                }
                else
                {
                    clientContextService.CurrentContext.Remove("SlxPriceList");
                }
			}
			else
			{
                if (opportunity.SlxPriceList != null)
                {
                    clientContextService.CurrentContext.Add("SlxPriceList", opportunity.SlxPriceList.Id.ToString());
                }
			}						
        }
	}
}

}
protected override void OnFormBound()
{
 var systemInfo = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.SalesLogix.Services.ISystemOptionsService>(true);  
 if (systemInfo.MultiCurrency) 
 { 
    FormHelper.AddBaseUserCurrencyRatesToClientContext(PageWorkItem); 
 } 
 var entityRateEntity = BindingSource.Current as Sage.Entity.Interfaces.IOpportunity; 
	if (systemInfo.MultiCurrency && this.PageWorkItem.State["ModeId"].ToString() == "Insert") 
	//Set Entity Rate and Code on the service since there is no entity to query from. 
	{ 
		var ccs = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.ClientContextService>(); 
	if (ccs.CurrentContext.ContainsKey("EntityRateCode")) 
		{ ccs.CurrentContext["EntityRateCode"].Equals(entityRateEntity.ExchangeRateCode); } 
	else 
		{ ccs.CurrentContext.Add("EntityRateCode", entityRateEntity.ExchangeRateCode); } 
	if (ccs.CurrentContext.ContainsKey("EntityRate")) 
		{ ccs.CurrentContext["EntityRate"].Equals(entityRateEntity.ExchangeRate); } 
	else 
		{ ccs.CurrentContext.Add("EntityRate", entityRateEntity.ExchangeRate.ToString()); } 
	} 
 var entity = BindingSource.Current as Sage.Entity.Interfaces.IOpportunity; 
 if (this.PageWorkItem.State["ModeId"].ToString() == "Insert") 
 { 
 var feed = new Sage.Integration.Entity.Feeds.OpportunityProductFeed(); 
 if (entity != null) 
      if (entity.Products.Count > 0) 
      { 
			var include = Sage.Common.Syndication.InclusionNode.CreateInclusionTree("Product", null, null, null); 
          var transformer = 
              Sage.Platform.Application.ApplicationContext.Current.Services.Get 
                  <Sage.Platform.SData.IAtomEntryToEntityTransformationService>(); 
          foreach (Sage.Entity.Interfaces.IOpportunityProduct item in entity.Products) 
          { 
              var transItem = transformer.ConvertEntity(item, include) as Sage.Integration.Entity.Feeds.OpportunityProductEntry; 
              if (transItem != null) 
              { 
                  feed.Entries.Add(transItem); 
              } 
          } 
          string text; 
          using (var stream = new System.IO.MemoryStream()) 
          { 
          	          	new Sage.Common.Syndication.JsonSerializer().SaveToStream((Sage.Common.Syndication.IFeed)feed, stream, null, include); 
          	text = Encoding.UTF8.GetString(stream.ToArray()); 
          } 
          OpportunityProductsgrdOppProducts_DataCarrier.Text = text; 
          entity.Products.Clear(); 
      } 
 } 
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}

                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/Opportunity/OpportunityProducts.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.OpportunityProducts.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.OpportunityProducts.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_OpportunityProducts", script.ToString(), true);
quickformload0(this, EventArgs.Empty);


}



public override Sage.Platform.Application.UI.ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
{
    ToolsSmartPartInfo tinfo = new ToolsSmartPartInfo();
    
    foreach (Control c in Controls)
    {
        SmartPartToolsContainer cont = c as SmartPartToolsContainer;
        if (cont != null)
        {
            switch (cont.ToolbarLocation)
            {
                case SmartPartToolsLocation.Right:
                    foreach (Control tool in cont.Controls)
                    {
                                            tinfo.RightTools.Add(tool);
                                        }
                    break;
                case SmartPartToolsLocation.Center:
                    foreach (Control tool in cont.Controls)
                    {
                        tinfo.CenterTools.Add(tool);
                    }
                    break;
                case SmartPartToolsLocation.Left:
                    foreach (Control tool in cont.Controls)
                    {
                        tinfo.LeftTools.Add(tool);
                    }
                    break;
            }
        }
    }

        return tinfo;
}

private Sage.Platform.Controls.IEntityForm _formAdapter;

public Sage.Platform.Controls.IEntityForm FormAdapter
{
    get { return _formAdapter ?? (_formAdapter = new OpportunityProductsAdapter(this)); }
}

public class OpportunityProductsAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IOpportunityProducts
{
    public OpportunityProductsAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}


}

</script>

<script type="text/javascript">
</script>
