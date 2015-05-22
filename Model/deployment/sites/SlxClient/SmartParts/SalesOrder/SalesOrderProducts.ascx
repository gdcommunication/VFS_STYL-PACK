<%@ Control Language="C#" ClassName="SalesOrderProducts" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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

	  			

<SalesLogix:ScriptResourceProvider ID="SalesOrderProductsluProduct_Strings" runat="server">
    <Keys>
        <SalesLogix:ResourceKeyName Key="luProduct.ButtonTooltip" />
        <SalesLogix:ResourceKeyName Key="luProduct.LookupDialogTitle" />
        <SalesLogix:ResourceKeyName Key="luProduct.DialogButtonText" />
				      </Keys>
</SalesLogix:ScriptResourceProvider>

	  	  	   

<SalesLogix:ScriptResourceProvider ID="SalesOrderProductsgrdItems_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdItems.a8c6d9fd-1bde-4d02-b2a8-f56adc076935.ColumnHeading" />
        <SalesLogix:ResourceKeyName Key="grdItems.a8c6d9fd-1bde-4d02-b2a8-f56adc076935.Text" />
<SalesLogix:ResourceKeyName Key="f842ee53-0b9f-43c7-858c-57afa8508f76.DialogTitleOverride" />   <SalesLogix:ResourceKeyName Key="grdItems.3160cbc2-c14d-4e58-94c9-5277e17b3951.ColumnHeading" />
        <SalesLogix:ResourceKeyName Key="grdItems.3160cbc2-c14d-4e58-94c9-5277e17b3951.Text" />
<SalesLogix:ResourceKeyName Key="0475f9ec-f5ca-4fbd-9241-6d93fbcbdaf7.DialogTitleOverride" />   <SalesLogix:ResourceKeyName Key="grdItems.eae77157-0570-48d4-bd9a-d78df7b84496.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.530b7cdb-cef1-4e94-a46a-cf8d931ff779.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.0c39de35-d246-4c4b-a1fa-57a0a9be41c6.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.6210cd5f-3e9d-40cf-8b1d-f8c15476cc79.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.a74f322c-ebd9-49d4-ad41-3bcd939e8b41.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.3ef53358-80dd-4e3f-99fb-355cb397a797.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.983c7b9b-3c12-48e3-add2-73ff8cd065c2.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.5cd443a0-928c-44a2-86f2-a4246f8223c7.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.28d57a8b-13ca-47c0-b41e-d969ed17dc28.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.0fd9479b-1d6f-497f-a870-26efbf44550d.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.eef3d53b-092f-4f1b-9429-22cfd8dd2bf4.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.68096333-c869-44c2-9b19-51d9058e50d8.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.ff4abcfa-992a-4721-8841-c0c0b6e89485.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.ca87da6c-54ec-4780-b7c9-ff6e49313f91.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdItems.7f13becf-d7b7-41ec-82af-24215aec5077.ColumnHeading" />
           <SalesLogix:ResourceKeyName Key="grdItems.Save.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdItems.Relate.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdItems.Delete.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdItems.Cancel.ToolTip" />
     </Keys>
</SalesLogix:ScriptResourceProvider>

												
		
		
		
		

																					
			
			
			
			
			
			
			
			
			
			
			
			
			
																										 





























<div style="display:none;">
  <asp:TextBox runat="server" ID="SalesOrderProductsgrdItems_DataCarrier" class="SalesOrderProductsgrdItems_DataCarrier" ></asp:TextBox>
</div>
  <div id="SalesOrderProductsgrdItems_Container" style="width:100%;height:100%;" class="">
    <div id="SalesOrderProductsgrdItems_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>


 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="SalesOrderProducts_RTools" ToolbarLocation="right">
    <asp:ImageButton runat="server" ID="btnAddCustomProduct"
 AlternateText="<%$ resources: btnAddCustomProduct.Caption %>"  ToolTip="<%$ resources: btnAddCustomProduct.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=add_custom_product_16x16"  />
   
    <asp:ImageButton runat="server" ID="btnLockAll"
 AlternateText="<%$ resources: btnLockAll.Caption %>"  ToolTip="<%$ resources: btnLockAll.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=lock_all_16x16"  />
 
    <asp:ImageButton runat="server" ID="btnUnlockAll"
 AlternateText="<%$ resources: btnUnlockAll.Caption %>"  ToolTip="<%$ resources: btnUnlockAll.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=unlock_all_16x16"  />
 
    <asp:ImageButton runat="server" ID="btnRenumber"
 AlternateText="<%$ resources: btnRenumber.Caption %>"  ToolTip="<%$ resources: btnRenumber.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=renumber_16x16"  />
 
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=SalesOrderProducts&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkSalesOrderProductsHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="SalesOrderProducts" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
 </SalesLogix:SmartPartToolsContainer>

<SalesLogix:ScriptResourceProvider ID="SalesOrderProductsResources" runat="server">
<Keys>
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
    get { return typeof(Sage.Entity.Interfaces.ISalesOrder); }
}

 

protected override void OnAddEntityBindings() {
    
   
                }
       
protected void grdItems_InsertAssociationAction(object sender, EventArgs e) {

	    string text = Request.Form.Get(SalesOrderProductsgrdItems_DataCarrier.UniqueID);
    if (text.Length > 0)
    {
    var feed = new Sage.Integration.Entity.Feeds.SalesOrderItemFeed();

		using (var stream = new System.IO.MemoryStream(Encoding.UTF8.GetBytes(text)))
		{
			new Sage.Common.Syndication.JsonSerializer().LoadFromStream<Sage.Integration.Entity.Feeds.SalesOrderItemEntry>(feed, stream);
		}

		if (feed == null) return;
		var transformer =
			Sage.Platform.Application.ApplicationContext.Current.Services.Get
				<Sage.Platform.SData.IAtomEntryToEntityTransformationService>();
    	
		var entity = BindingSource.Current as Sage.Entity.Interfaces.ISalesOrder;

		if (transformer != null && entity != null && entity.SalesOrderItems.Count == 0)
		{
			foreach (Sage.Integration.Entity.Feeds.SalesOrderItemEntry entry in feed.Entries)
			{
				var item = transformer.ConvertEntry(entry) as Sage.Entity.Interfaces.ISalesOrderItem;
				if (item != null)
				{
					item.SalesOrder = entity;
					entity.SalesOrderItems.Add(item);
				}
			}
			entity.Persisted -= grdItems_InsertAssociationAction;
			entity.Save();
		}
	}



}
protected void btnAddCustomProduct_ClickAction(object sender, EventArgs e) {
Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
Object[] methodArgs = new Object[] { FormAdapter, e };
lib.Execute("SalesOrderProducts.btnAddCustomProduct_OnClick", methodArgs);
  Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
    if (refresher != null) {
      refresher.RefreshAll();
    }
    else {  
      Response.Redirect(Request.Url.ToString());
    }

}
protected void btnLockAll_ClickAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ISalesOrder>("SalesOrder.LockPricingForSOItems", objarray);

          btnLockAll_ClickActionBRC(sender, e);
    
    Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
    if (refresher != null) {
      refresher.RefreshAll();
    }
    else {  
      Response.Redirect(Request.Url.ToString());
    }

}
protected void btnLockAll_ClickActionBRC(object sender, EventArgs e) {
Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
if (refresher != null) {
  refresher.RefreshAll();
}
else {  
  Response.Redirect(Request.Url.ToString());
}
}
protected void btnUnlockAll_ClickAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ISalesOrder>("SalesOrder.UnLockPricingForSOItems", objarray);

          btnUnlockAll_ClickActionBRC(sender, e);
    
    Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
    if (refresher != null) {
      refresher.RefreshAll();
    }
    else {  
      Response.Redirect(Request.Url.ToString());
    }

}
protected void btnUnlockAll_ClickActionBRC(object sender, EventArgs e) {
Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
if (refresher != null) {
  refresher.RefreshAll();
}
else {  
  Response.Redirect(Request.Url.ToString());
}
}
protected void btnRenumber_ClickAction(object sender, EventArgs e) {
      object[] objarray = new object[] { this.BindingSource.Current };
     Sage.Platform.EntityFactory.Execute<Sage.Entity.Interfaces.ISalesOrder>("SalesOrder.ReAssignLineNumbers", objarray);

          btnRenumber_ClickActionBRC(sender, e);
    
    Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
    if (refresher != null) {
      refresher.RefreshAll();
    }
    else {  
      Response.Redirect(Request.Url.ToString());
    }

}
protected void btnRenumber_ClickActionBRC(object sender, EventArgs e) {
Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
if (refresher != null) {
  refresher.RefreshAll();
}
else {  
  Response.Redirect(Request.Url.ToString());
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
         ent.Persisted += grdItems_InsertAssociationAction;
     }
 }
btnAddCustomProduct.Click += new ImageClickEventHandler(btnAddCustomProduct_ClickAction);
btnLockAll.Click += new ImageClickEventHandler(btnLockAll_ClickAction);
btnUnlockAll.Click += new ImageClickEventHandler(btnUnlockAll_ClickAction);
btnRenumber.Click += new ImageClickEventHandler(btnRenumber_ClickAction);


}

protected void quickformload0(object sender, EventArgs e) {
Sage.Entity.Interfaces.ISalesOrder salesOrder = this.BindingSource.Current as Sage.Entity.Interfaces.ISalesOrder;
if (salesOrder != null)
{
    Sage.Platform.SData.IAppIdMappingService mappingService =
        Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.Platform.SData.IAppIdMappingService>(
            true);
    //if this is a Sales Order that synced from the accounting system or the Sales Order has been submitted then we disable it
    bool isIntegrated = mappingService.IsIntegrationEnabled();
	if (isIntegrated)
	{
		var clientContextService = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.ClientContextService>();
		if (clientContextService != null)
		{
			// OperatingCompany
			if (clientContextService.CurrentContext.ContainsKey("OperatingCompany"))
			{
                if (salesOrder.OperatingCompany != null)
                {
				    clientContextService.CurrentContext["OperatingCompany"] = salesOrder.OperatingCompany.Id.ToString();
                }
                else
                {
                    clientContextService.CurrentContext.Remove("OperatingCompany");
                }
			}
			else
			{
                if (salesOrder.OperatingCompany != null)
                {
                    clientContextService.CurrentContext.Add("OperatingCompany", salesOrder.OperatingCompany.Id.ToString());
                }
			}
			
			// SlxPriceList
			if (clientContextService.CurrentContext.ContainsKey("SlxPriceList"))
			{
                if (salesOrder.SlxPriceList != null)
                {
				    clientContextService.CurrentContext["SlxPriceList"] = salesOrder.SlxPriceList.Id.ToString();
                }
                else
                {
                    clientContextService.CurrentContext.Remove("SlxPriceList");
                }
			}
			else
			{
                if (salesOrder.SlxPriceList != null)
                {
                    clientContextService.CurrentContext.Add("SlxPriceList", salesOrder.SlxPriceList.Id.ToString());
                }
			}			

			// GlobalSyncId			
			if (clientContextService.CurrentContext.ContainsKey("GlobalSyncId"))
			{
				clientContextService.CurrentContext["GlobalSyncId"] = salesOrder.GlobalSyncId.ToString();
			}
			else
			{
				clientContextService.CurrentContext.Add("GlobalSyncId", salesOrder.GlobalSyncId.ToString());
			}
			
			// SalesOrderStatus
            if (clientContextService.CurrentContext.ContainsKey("SalesOrderStatus"))
            {
                if (salesOrder.ERPSalesOrder != null && !String.IsNullOrEmpty(salesOrder.ERPSalesOrder.ERPStatus))
                {
                    clientContextService.CurrentContext["SalesOrderStatus"] = salesOrder.ERPSalesOrder.ERPStatus;
                }
                else
                {
                    clientContextService.CurrentContext.Remove("SalesOrderStatus");
                }
            }
            else
            {
                if (salesOrder.ERPSalesOrder != null)
                {
                    clientContextService.CurrentContext.Add("SalesOrderStatus",
                                                            !String.IsNullOrEmpty(salesOrder.ERPSalesOrder.ERPStatus)
                                                                ? salesOrder.ERPSalesOrder.ERPStatus
                                                                : String.Empty);
                }
            }
        }
	}
    bool isOpen = false;
    if (!String.IsNullOrEmpty(salesOrder.ERPSalesOrder.ERPStatus))
    {
        isOpen = (salesOrder.ERPSalesOrder.ERPStatus.Equals(
            GetLocalResourceObject("erpStatus_Open").ToString()) ||
            salesOrder.ERPSalesOrder.ERPStatus.Equals(GetLocalResourceObject("erpStatus_Rejected").ToString()));
    }
    bool erpSalesOrder = (mappingService.IsIntegrationEnabled() && (salesOrder.GlobalSyncId.HasValue && !isOpen));
        
    bool lockPriceAccess = RoleSecurityService.HasAccess("Entities/SalesOrders/LockPricing");
    bool closed = false;
    if (salesOrder.Status != null)
    {
        closed = (salesOrder.Status.ToUpper().Equals(GetLocalResourceObject("SalesOrderStatus_Closed").ToString().ToUpper()) ||
            salesOrder.Status.ToUpper().Equals(GetLocalResourceObject("SalesOrderStatus_Transmitted").ToString().ToUpper()));
    }
    btnAddCustomProduct.Visible = btnAddCustomProduct.Visible && !closed && !erpSalesOrder;
    btnLockAll.Visible = !closed && isIntegrated && lockPriceAccess && !erpSalesOrder;
    btnUnlockAll.Visible = !closed && isIntegrated && lockPriceAccess && !erpSalesOrder;
    btnRenumber.Visible = !closed && !erpSalesOrder && salesOrder.Id != null;
}

}
protected void quickformload1(object sender, EventArgs e) {
Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
Object[] methodArgs = new Object[] { FormAdapter, e };
lib.Execute("SalesOrderProducts.OnLoadHandler", methodArgs);

}
private bool _runActivating;
protected override void OnActivating()
{
_runActivating = true;
}
private void DoActivating()
{
quickformload1(this, EventArgs.Empty);

}
protected override void OnFormBound()
{
Sage.Platform.WebPortal.EntityPage epage = Page as Sage.Platform.WebPortal.EntityPage;
        if (epage != null)
            _runActivating = (epage.IsNewEntity || _runActivating);
if (_runActivating) DoActivating();
 var systemInfo = Sage.Platform.Application.ApplicationContext.Current.Services.Get<Sage.SalesLogix.Services.ISystemOptionsService>(true);  
 if (systemInfo.MultiCurrency) 
 { 
    FormHelper.AddBaseUserCurrencyRatesToClientContext(PageWorkItem); 
 } 
 var entityRateEntity = BindingSource.Current as Sage.Entity.Interfaces.ISalesOrder; 
	if (systemInfo.MultiCurrency && this.PageWorkItem.State["ModeId"].ToString() == "Insert") 
	//Set Entity Rate and Code on the service since there is no entity to query from. 
	{ 
		var ccs = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.ClientContextService>(); 
	if (ccs.CurrentContext.ContainsKey("EntityRateCode")) 
		{ ccs.CurrentContext["EntityRateCode"].Equals(entityRateEntity.CurrencyCode); } 
	else 
		{ ccs.CurrentContext.Add("EntityRateCode", entityRateEntity.CurrencyCode); } 
	if (ccs.CurrentContext.ContainsKey("EntityRate")) 
		{ ccs.CurrentContext["EntityRate"].Equals(entityRateEntity.ExchangeRate); } 
	else 
		{ ccs.CurrentContext.Add("EntityRate", entityRateEntity.ExchangeRate.ToString()); } 
	} 
 var entity = BindingSource.Current as Sage.Entity.Interfaces.ISalesOrder; 
 if (this.PageWorkItem.State["ModeId"].ToString() == "Insert") 
 { 
 var feed = new Sage.Integration.Entity.Feeds.SalesOrderItemFeed(); 
 if (entity != null) 
      if (entity.SalesOrderItems.Count > 0) 
      { 
			var include = Sage.Common.Syndication.InclusionNode.CreateInclusionTree("Product,UnitOfMeasure", null, null, null); 
          var transformer = 
              Sage.Platform.Application.ApplicationContext.Current.Services.Get 
                  <Sage.Platform.SData.IAtomEntryToEntityTransformationService>(); 
          foreach (Sage.Entity.Interfaces.ISalesOrderItem item in entity.SalesOrderItems) 
          { 
              var transItem = transformer.ConvertEntity(item, include) as Sage.Integration.Entity.Feeds.SalesOrderItemEntry; 
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
          SalesOrderProductsgrdItems_DataCarrier.Text = text; 
          entity.SalesOrderItems.Clear(); 
      } 
 } 
ClientBindingMgr.RegisterSaveButton(btnAddCustomProduct);

if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}

                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/SalesOrder/SalesOrderProducts.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.SalesOrderProducts.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.SalesOrderProducts.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_SalesOrderProducts", script.ToString(), true);
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
    get { return _formAdapter ?? (_formAdapter = new SalesOrderProductsAdapter(this)); }
}

public class SalesOrderProductsAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.ISalesOrderProducts
{
    public SalesOrderProductsAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IButtonControl _btnAddCustomProduct;
    public  Sage.Platform.Controls.IButtonControl btnAddCustomProduct
    {
        get { return FindControl(ref _btnAddCustomProduct, "btnAddCustomProduct"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnLockAll;
    public  Sage.Platform.Controls.IButtonControl btnLockAll
    {
        get { return FindControl(ref _btnLockAll, "btnLockAll"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnUnlockAll;
    public  Sage.Platform.Controls.IButtonControl btnUnlockAll
    {
        get { return FindControl(ref _btnUnlockAll, "btnUnlockAll"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnRenumber;
    public  Sage.Platform.Controls.IButtonControl btnRenumber
    {
        get { return FindControl(ref _btnRenumber, "btnRenumber"); }
    }

    public  void OnLoadHandler(System.EventArgs e)
    {
        Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
        Object[] methodArgs = new Object[] { this, e };
        lib.Execute("SalesOrderProducts.OnLoadHandler", methodArgs);
    }
    public  void btnAddCustomProduct_OnClick(System.EventArgs e)
    {
        Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
        Object[] methodArgs = new Object[] { this, e };
        lib.Execute("SalesOrderProducts.btnAddCustomProduct_OnClick", methodArgs);
    }
}

</script>

<script type="text/javascript">
</script>