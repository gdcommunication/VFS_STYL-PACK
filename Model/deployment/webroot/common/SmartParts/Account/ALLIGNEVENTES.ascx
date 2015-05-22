<%@ Control Language="C#" ClassName="ALLIGNEVENTES" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
 ExpandableRows="True" ResizableColumns="True" >
<Columns>
   <asp:BoundField DataField="Couleurs_recto"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.10b47749-e47b-4574-84a1-368be5516a08.ColumnHeading %>"          >
      </asp:BoundField>
    <asp:BoundField DataField="Couleurs_verso"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.cf7c2e50-2d2f-4f67-aa19-25829bac2b4d.ColumnHeading %>"          >
      </asp:BoundField>
    <asp:BoundField DataField="CreateDate"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.c33aa395-1e74-4da4-a6b6-a157f8aa23ed.ColumnHeading %>"          >
      </asp:BoundField>
    <asp:BoundField DataField="CreateUser"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.d7b4b4ed-f26e-419d-9bae-12f902e2ae4a.ColumnHeading %>"          >
      </asp:BoundField>
    <asp:BoundField DataField="Date_livraison_prevue"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.c3dbb99b-6b01-4174-a294-1f5e7197365e.ColumnHeading %>"          >
      </asp:BoundField>
    <asp:BoundField DataField="Date_piece"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.3a5941d9-3895-4404-a656-02b101e6e53a.ColumnHeading %>"          >
      </asp:BoundField>
    <asp:BoundField DataField="Designation_1"
      HeaderText="<%$ resources: grdTHistoriqueLignesDeVentess.b94b5471-560b-457a-8d0d-b03fdb278d2e.ColumnHeading %>"          >
      </asp:BoundField>
 </Columns>
</SalesLogix:SlxGridView>

<script runat="server" type="text/C#">


</script>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="ALLIGNEVENTES_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=ALLIGNEVENTES&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkALLIGNEVENTESHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="ALLIGNEVENTES" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
   dsTHistoriqueLignesDeVentess.BindFieldNames = new String[] { "Id","Couleurs_recto","Couleurs_verso","CreateDate","CreateUser","Date_livraison_prevue","Date_piece","Designation_1" };
     
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
    get { return _formAdapter ?? (_formAdapter = new ALLIGNEVENTESAdapter(this)); }
}

public class ALLIGNEVENTESAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IALLIGNEVENTES
{
    public ALLIGNEVENTESAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
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