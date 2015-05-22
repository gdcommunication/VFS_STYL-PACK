<%@ Control Language="C#" ClassName="histoventessp" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
  <SalesLogix:SlxGridView runat="server" ID="grdTHistoriqueLignesDeVentess" GridLines="None"
AutoGenerateColumns="false" CellPadding="4" CssClass="datagrid" PagerStyle-CssClass="gridPager"
AlternatingRowStyle-CssClass="rowdk" RowStyle-CssClass="rowlt" SelectedRowStyle-CssClass="rowSelected" ShowEmptyTable="true" EnableViewState="false"
 ExpandableRows="True" ResizableColumns="True"  OnRowCommand="grdTHistoriqueLignesDeVentess_RowCommand"
 DataKeyNames="InstanceId,Id"
 AllowSorting="true" OnSorting="grdTHistoriqueLignesDeVentess_Sorting"  OnRowEditing="grdTHistoriqueLignesDeVentess_RowEditing"  ShowSortIcon="true" >
<Columns>
 <asp:ButtonField CommandName="Edit"
  Text="<%$ resources: grdTHistoriqueLignesDeVentess.936a2c1b-cd66-4938-95df-fbf3efddbde1.Text %>"               >
          </asp:ButtonField>
      <asp:BoundField DataField="Date_piece"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.374eb228-caed-44f1-8a4d-e268a1ccb1ef.ColumnHeading %>"       SortExpression="Date_piece"    >
      </asp:BoundField>
    <asp:BoundField DataField="Num_commande"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.abafaf16-a1cc-47f1-8dd4-d36df7a4e0e5.ColumnHeading %>"       SortExpression="Num_commande"    >
      </asp:BoundField>
    <asp:BoundField DataField="Code_article"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.3ade809d-362e-4570-a22b-0601f4668a3f.ColumnHeading %>"       SortExpression="Code_article"    >
      </asp:BoundField>
    <asp:BoundField DataField="GAMME"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.831269d8-d44d-49bb-a2c2-4d3636672fc8.ColumnHeading %>"       SortExpression="GAMME"    >
      </asp:BoundField>
    <asp:BoundField DataField="Quantite_commandee"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.9140ab27-3a00-46ff-aebb-e2b8377f3aef.ColumnHeading %>"       SortExpression="Quantite_commandee"    >
      </asp:BoundField>
    <asp:BoundField DataField="Quantite_livree"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.d0503d81-811b-4adc-bf60-ada0c7bb515c.ColumnHeading %>"       SortExpression="Quantite_livree"    >
      </asp:BoundField>
    <asp:BoundField DataField="RAE"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.3190a479-d4a0-4f66-a8f2-d6e5c8315f49.ColumnHeading %>"       SortExpression="RAE"    >
      </asp:BoundField>
    <asp:BoundField DataField="Prix_unitaire"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.1c96a3d0-814b-457f-a982-a8dba5ac6d14.ColumnHeading %>"       SortExpression="Prix_unitaire"    >
      </asp:BoundField>
    <asp:BoundField DataField="Couleurs_recto"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.f5d9c291-21f2-4edb-9df3-99a03fe3432d.ColumnHeading %>"       SortExpression="Couleurs_recto"    >
      </asp:BoundField>
    <asp:BoundField DataField="Couleurs_verso"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.4c77b9a9-0f3a-4f25-815f-1dffcd7d4386.ColumnHeading %>"       SortExpression="Couleurs_verso"    >
      </asp:BoundField>
    <asp:BoundField DataField="Montant_ht"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.472e74b5-d4c9-4653-bcbc-80d2fdf81017.ColumnHeading %>"       SortExpression="Montant_ht"    >
      </asp:BoundField>
    <asp:BoundField DataField="Date_livraison_prevue"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.2a814aee-f73b-46af-a097-634bfb288383.ColumnHeading %>"       SortExpression="Date_livraison_prevue"    >
      </asp:BoundField>
    <asp:BoundField DataField="ORIGINE"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.c034fd3f-e347-480d-8f10-bf0817db4b6b.ColumnHeading %>"       SortExpression="ORIGINE"    >
      </asp:BoundField>
 </Columns>
</SalesLogix:SlxGridView>

<script runat="server" type="text/C#">


protected void grdTHistoriqueLignesDeVentess_Sorting(object sender, GridViewSortEventArgs e) { }
protected void grdTHistoriqueLignesDeVentess_RowCommand(object sender, GridViewCommandEventArgs e)
{
    if (e.CommandName == "Page")
        return;
    int rowIndex;
    if (Int32.TryParse(e.CommandArgument.ToString(), out rowIndex))
    {
        dsTHistoriqueLignesDeVentess.SelectedIndex = rowIndex;
        object currentEntity = dsTHistoriqueLignesDeVentess.Current;
        if ((currentEntity is Sage.Platform.ComponentModel.ComponentView) && !((Sage.Platform.ComponentModel.ComponentView)currentEntity).IsVirtualComponent)
            currentEntity = ((Sage.Platform.ComponentModel.ComponentView)currentEntity).Component;
        string id = String.Empty;
        //Check if this is an unpersisted entity and use its InstanceId
        if (Sage.Platform.WebPortal.PortalUtil.ObjectIsNewEntity(currentEntity))
        {
            if (grdTHistoriqueLignesDeVentess.DataKeys[0].Values.Count > 1) {
                foreach (DictionaryEntry val in grdTHistoriqueLignesDeVentess.DataKeys[rowIndex].Values)
                {
                    if (val.Key.ToString() == "InstanceId")
                    {
                        Guid instanceId = (Guid)val.Value;
                        dsTHistoriqueLignesDeVentess.SetCurrentEntityByInstanceId(instanceId);
                        id = instanceId.ToString();
                        currentEntity = dsTHistoriqueLignesDeVentess.Current;
                        if ((currentEntity is Sage.Platform.ComponentModel.ComponentView) && !((Sage.Platform.ComponentModel.ComponentView)currentEntity).IsVirtualComponent)
                            currentEntity = ((Sage.Platform.ComponentModel.ComponentView)currentEntity).Component;
                    }
                }
            }
        }
        else
        {
            foreach (DictionaryEntry val in grdTHistoriqueLignesDeVentess.DataKeys[rowIndex].Values)
            {
                if (val.Key.ToString() != "InstanceId")
                {
                    id = val.Value.ToString();
                }
            }
        }
        if (e.CommandName.Equals("Edit"))
        {
            if (DialogService != null)
            {
                // QFDataGrid
                            DialogService.SetSpecs(400, 600, "visucompletventes", GetLocalResourceObject("dcbf256f-1c60-4f9a-9172-08e594308a72.DialogTitleOverride").ToString() );
                            DialogService.EntityType = typeof(Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes );
                DialogService.EntityID = id;
                DialogService.ShowDialog();
            }
        }
    }
    grdTHistoriqueLignesDeVentess_refresh();
}
    protected void grdTHistoriqueLignesDeVentess_refresh()
    {
        if (PageWorkItem != null) {
            Sage.Platform.WebPortal.Services.IPanelRefreshService refresher = PageWorkItem.Services.Get<Sage.Platform.WebPortal.Services.IPanelRefreshService>();
            if (refresher != null)
            {
                refresher.RefreshAll();
            }
            else
            {
                Response.Redirect(Request.Url.ToString());
            }
        }
    }

        protected void grdTHistoriqueLignesDeVentess_RowEditing(object sender, GridViewEditEventArgs e)
    {
        grdTHistoriqueLignesDeVentess.SelectedIndex = e.NewEditIndex;
        e.Cancel = true;
    }
        </script>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="histoventessp_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=histoventessp&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkhistoventesspHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="histoventessp" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.IAccount); }
}

 private Sage.Platform.WebPortal.Binding.WebEntityListBindingSource _dsTHistoriqueLignesDeVentess;
public Sage.Platform.WebPortal.Binding.WebEntityListBindingSource dsTHistoriqueLignesDeVentess
{ 
  get 
  {
    if (_dsTHistoriqueLignesDeVentess == null)
    {
             _dsTHistoriqueLignesDeVentess = new Sage.Platform.WebPortal.Binding.WebEntityListBindingSource(typeof(Sage.Entity.Interfaces.ITHistoriqueLignesDeVentes), 
	    EntityType              ,"THistoriqueLignesDeVentess", System.Reflection.MemberTypes.Property);
                   _dsTHistoriqueLignesDeVentess.UseSmartQuery = true;
      	   	}
 	return _dsTHistoriqueLignesDeVentess;
  }
}

void dsTHistoriqueLignesDeVentess_OnCurrentEntitySet(object sender, EventArgs e) 
{
      if (Visible)
    { 
		if(BindingSource.Current != null)
		{
		
      
        dsTHistoriqueLignesDeVentess.SourceObject = BindingSource.Current;
   		}
    }
   if (Visible)
   {   
      RegisterBindingsWithClient(dsTHistoriqueLignesDeVentess);
   }
}

 



 

protected override void OnAddEntityBindings() {
       dsTHistoriqueLignesDeVentess.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityListBinding("THistoriqueLignesDeVentess", grdTHistoriqueLignesDeVentess ));
   dsTHistoriqueLignesDeVentess.BindFieldNames = new String[] { "Id","Date_piece","Num_commande","Code_article","GAMME","Quantite_commandee","Quantite_livree","RAE","Prix_unitaire","Couleurs_recto","Couleurs_verso","Montant_ht","Date_livraison_prevue","ORIGINE" };
     
     BindingSource.OnCurrentEntitySet += new EventHandler(dsTHistoriqueLignesDeVentess_OnCurrentEntitySet);
    
}
       

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 
}

protected override void OnFormBound()
{
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
if (dsTHistoriqueLignesDeVentess.SourceObject == null) { dsTHistoriqueLignesDeVentess.SourceObject = BindingSource.Current; }
if (dsTHistoriqueLignesDeVentess.SourceObject == null) { RegisterBindingsWithClient(dsTHistoriqueLignesDeVentess); }
dsTHistoriqueLignesDeVentess.Bind();



}



public override Sage.Platform.Application.UI.ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
{
    ToolsSmartPartInfo tinfo = new ToolsSmartPartInfo();
        if (BindingSource != null)
    {
        if (BindingSource.Current != null)
        {
            tinfo.Description = BindingSource.Current.ToString();
            tinfo.Title = BindingSource.Current.ToString();
        }
    }
    
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
    get { return _formAdapter ?? (_formAdapter = new histoventesspAdapter(this)); }
}

public class histoventesspAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.Ihistoventessp
{
    public histoventesspAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IDataGridControl _grdTHistoriqueLignesDeVentess;
    public  Sage.Platform.Controls.IDataGridControl grdTHistoriqueLignesDeVentess
    {
        get { return FindControl(ref _grdTHistoriqueLignesDeVentess, "grdTHistoriqueLignesDeVentess"); }
    }
    private Sage.Platform.Controls.IDataSourceControl _dsTHistoriqueLignesDeVentess;
    public  Sage.Platform.Controls.IDataSourceControl dsTHistoriqueLignesDeVentess
    {
        get { return FindControl(ref _dsTHistoriqueLignesDeVentess, "dsTHistoriqueLignesDeVentess"); }
    }

}

</script>

<script type="text/javascript">
</script>
