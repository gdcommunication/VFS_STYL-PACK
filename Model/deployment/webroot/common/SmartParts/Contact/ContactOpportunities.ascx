<%@ Control Language="C#" ClassName="ContactOpportunities" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
<%@ Register Assembly="Sage.SalesLogix.Client.GroupBuilder" Namespace="Sage.SalesLogix.Client.GroupBuilder" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.PickList" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.DependencyLookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Lookup" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.Web.Controls" Namespace="Sage.SalesLogix.Web.Controls.Timeline" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.SalesLogix.HighLevelTypes" Namespace="Sage.SalesLogix.HighLevelTypes" TagPrefix="SalesLogix" %>
<%@ Register Assembly="Sage.Platform.WebPortal" Namespace="Sage.Platform.WebPortal.SmartParts" TagPrefix="SalesLogix" %>

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

			

<SalesLogix:ScriptResourceProvider ID="ContactOpportunitieslueAddOpportunity_Strings" runat="server">
    <Keys>
        <SalesLogix:ResourceKeyName Key="lueAddOpportunity.ButtonTooltip" />
        <SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupDialogTitle" />
        <SalesLogix:ResourceKeyName Key="lueAddOpportunity.DialogButtonText" />
						<SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupProperties.AccountManager.UserInfo.UserName.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupProperties.Description.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupProperties.Account.AccountName.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupProperties.Stage.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupProperties.Status.PropertyHeader" />
		 		<SalesLogix:ResourceKeyName Key="lueAddOpportunity.LookupProperties.Owner.OwnerDescription.PropertyHeader" />
		       </Keys>
</SalesLogix:ScriptResourceProvider>

	  	   

<SalesLogix:ScriptResourceProvider ID="ContactOpportunitiesgrdOpportunities_Strings" runat="server">
    <Keys>
          <SalesLogix:ResourceKeyName Key="grdOpportunities.e3bbf2a2-4be5-40e4-8546-518711a148ba.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOpportunities.ad462c04-ef99-4f77-8bf8-b155be122547.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOpportunities.f24c7376-749d-43e0-b31e-437523eaedf3.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOpportunities.53dd7f36-5ffd-49f3-8020-ae4198b1ba88.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOpportunities.5443d461-c088-4a41-9df4-5da1ab259b5d.ColumnHeading" />
       <SalesLogix:ResourceKeyName Key="grdOpportunities.45925347-de96-4111-b652-5a49177877b9.ColumnHeading" />
           <SalesLogix:ResourceKeyName Key="grdOpportunities.Relate.ToolTip" />
    <SalesLogix:ResourceKeyName Key="grdOpportunities.Delete.ToolTip" />
     </Keys>
</SalesLogix:ScriptResourceProvider>

								
		
		
		
		

					 





























<div style="display:none;">
  <asp:TextBox runat="server" ID="ContactOpportunitiesgrdOpportunities_DataCarrier" class="ContactOpportunitiesgrdOpportunities_DataCarrier" ></asp:TextBox>
</div>
  <div id="ContactOpportunitiesgrdOpportunities_Container" style="width:100%;height:100%;" class="">
    <div id="ContactOpportunitiesgrdOpportunities_Grid" style="width:100%;height:100%;"
     data-dojo-type="dijit.layout.BorderContainer"
></div>
</div>


 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="ContactOpportunities_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=ContactOpportunities&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkContactOpportunitiesHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="ContactOpportunities" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
 </SalesLogix:SmartPartToolsContainer>



<script runat="server" type="text/C#">
/// <summary>
/// Gets or sets the role security service.
/// </summary>
/// <value>The role security service.</value>
[Sage.Platform.Application.ServiceDependency]
public Sage.Platform.Security.IRoleSecurityService RoleSecurityService { get; set; }

public override Type EntityType
{
    get { return typeof(Sage.Entity.Interfaces.IContact); }
}

 private Sage.Platform.WebPortal.Binding.WebEntityListBindingSource _dsGrid2;
public Sage.Platform.WebPortal.Binding.WebEntityListBindingSource dsGrid2
{ 
  get 
  {
    if (_dsGrid2 == null)
    {
             _dsGrid2 = new Sage.Platform.WebPortal.Binding.WebEntityListBindingSource(typeof(Sage.Entity.Interfaces.IOpportunityContact), 
	    EntityType              ,"Opportunities", System.Reflection.MemberTypes.Property);
            	   	}
 	return _dsGrid2;
  }
}

void dsGrid2_OnCurrentEntitySet(object sender, EventArgs e) 
{
      if (Visible)
    { 
		if(BindingSource.Current != null)
		{
		
      
        dsGrid2.SourceObject = BindingSource.Current;
   		}
    }
   if (Visible)
   {   
      RegisterBindingsWithClient(dsGrid2);
   }
}

 



 

protected override void OnAddEntityBindings() {
    
     BindingSource.OnCurrentEntitySet += new EventHandler(dsGrid2_OnCurrentEntitySet);
    
}
       
protected void grdOpportunities_InsertAssociationAction(object sender, EventArgs e) {

	    string text = Request.Form.Get(ContactOpportunitiesgrdOpportunities_DataCarrier.UniqueID);
    if (text.Length > 0)
    {
    var feed = new Sage.Integration.Entity.Feeds.OpportunityContactFeed();

		using (var stream = new System.IO.MemoryStream(Encoding.UTF8.GetBytes(text)))
		{
			new Sage.Common.Syndication.JsonSerializer().LoadFromStream<Sage.Integration.Entity.Feeds.OpportunityContactEntry>(feed, stream);
		}

		if (feed == null) return;
		var transformer =
			Sage.Platform.Application.ApplicationContext.Current.Services.Get
				<Sage.Platform.SData.IAtomEntryToEntityTransformationService>();
    	
		var entity = BindingSource.Current as Sage.Entity.Interfaces.IContact;

		if (transformer != null && entity != null && entity.Opportunities.Count == 0)
		{
			foreach (Sage.Integration.Entity.Feeds.OpportunityContactEntry entry in feed.Entries)
			{
				var item = transformer.ConvertEntry(entry) as Sage.Entity.Interfaces.IOpportunityContact;
				if (item != null)
				{
					item.Contact = entity;
					entity.Opportunities.Add(item);
				}
			}
			entity.Persisted -= grdOpportunities_InsertAssociationAction;
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
         ent.Persisted += grdOpportunities_InsertAssociationAction;
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
 var entity = BindingSource.Current as Sage.Entity.Interfaces.IContact; 
 if (this.PageWorkItem.State["ModeId"].ToString() == "Insert") 
 { 
 var feed = new Sage.Integration.Entity.Feeds.OpportunityContactFeed(); 
 if (entity != null) 
      if (entity.Opportunities.Count > 0) 
      { 
			var include = Sage.Common.Syndication.InclusionNode.CreateInclusionTree("Opportunity", null, null, null); 
          var transformer = 
              Sage.Platform.Application.ApplicationContext.Current.Services.Get 
                  <Sage.Platform.SData.IAtomEntryToEntityTransformationService>(); 
          foreach (Sage.Entity.Interfaces.IOpportunityContact item in entity.Opportunities) 
          { 
              var transItem = transformer.ConvertEntity(item, include) as Sage.Integration.Entity.Feeds.OpportunityContactEntry; 
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
          ContactOpportunitiesgrdOpportunities_DataCarrier.Text = text; 
          entity.Opportunities.Clear(); 
      } 
 } 
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
if (dsGrid2.SourceObject == null) { dsGrid2.SourceObject = BindingSource.Current; }
if (dsGrid2.SourceObject == null) { RegisterBindingsWithClient(dsGrid2); }
dsGrid2.Bind();


                                var script = new StringBuilder();
                                script.AppendLine("require(['" + Page.ResolveUrl("~/SmartParts/Contact/ContactOpportunities.js") + "'], function () {");
                                if (Page.IsPostBack)
                                {
                                    script.Append(" Sage.UI.Forms.ContactOpportunities.init({workspace: '" + getMyWorkspace() + "'} );");
                                }
                                else 
                                {
                                    script.AppendLine("require(['dojo/ready'], function(ready) {");
                                    script.Append("ready(function () {Sage.UI.Forms.ContactOpportunities.init({workspace: '" + getMyWorkspace() + "'} ); });");
                                    script.AppendLine("});");//end ready require
                                }

                                script.AppendLine("});");// end require
                                ScriptManager.RegisterStartupScript(this, GetType(), "initialize_ContactOpportunities", script.ToString(), true);


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
    get { return _formAdapter ?? (_formAdapter = new ContactOpportunitiesAdapter(this)); }
}

public class ContactOpportunitiesAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IContactOpportunities
{
    public ContactOpportunitiesAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IDataSourceControl _dsGrid2;
    public  Sage.Platform.Controls.IDataSourceControl dsGrid2
    {
        get { return FindControl(ref _dsGrid2, "dsGrid2"); }
    }

}

</script>

<script type="text/javascript">
</script>
