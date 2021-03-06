<%@ Control Language="C#" ClassName="AutreInfo" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
<table border="0" cellpadding="1" cellspacing="0" class="formtable">
         <col width="50%" />
            <col width="50%" />
     <tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="QFFERMETURE_lbl" AssociatedControlID="QFFERMETURE" runat="server" Text="<%$ resources: QFFERMETURE.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="QFFERMETURE" PickListName="Compte - Jour de semaine" AllowMultiples="true" MaxLength="64"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="QFTextBox1_lbl" AssociatedControlID="QFTextBox1" runat="server" Text="<%$ resources: QFTextBox1.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="QFTextBox1" PickListName="GOLD" MustExistInList="false" MaxLength="64"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="QFTextBox3_lbl" AssociatedControlID="QFTextBox3" runat="server" Text="<%$ resources: QFTextBox3.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="QFTextBox3" PickListName="MA_CLASSE" MustExistInList="false" MaxLength="64"  />
  </div>

      </td>
                <td></td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="AutreInfo_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=AutreInfo&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkAutreInfoHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="AutreInfo" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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

 

protected override void OnAddEntityBindings() {
                 // QFFERMETURE.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFFERMETUREPickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("TCompteInformations.Jour_fermeture", QFFERMETURE, "PickListValue");
        BindingSource.Bindings.Add(QFFERMETUREPickListValueBinding);
                    // QFTextBox1.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox1PickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Region", QFTextBox1, "PickListValue");
        BindingSource.Bindings.Add(QFTextBox1PickListValueBinding);
                    // QFTextBox3.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox3PickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("TCompteInformations.CLASSIFICATION", QFTextBox3, "PickListValue");
        BindingSource.Bindings.Add(QFTextBox3PickListValueBinding);
    
   
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
    get { return _formAdapter ?? (_formAdapter = new AutreInfoAdapter(this)); }
}

public class AutreInfoAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IAutreInfo
{
    public AutreInfoAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IPickListControl _QFFERMETURE;
    public  Sage.Platform.Controls.IPickListControl QFFERMETURE
    {
        get { return FindControl(ref _QFFERMETURE, "QFFERMETURE"); }
    }
    private Sage.Platform.Controls.IPickListControl _QFTextBox3;
    public  Sage.Platform.Controls.IPickListControl QFTextBox3
    {
        get { return FindControl(ref _QFTextBox3, "QFTextBox3"); }
    }
    private Sage.Platform.Controls.IPickListControl _QFTextBox1;
    public  Sage.Platform.Controls.IPickListControl QFTextBox1
    {
        get { return FindControl(ref _QFTextBox1, "QFTextBox1"); }
    }

}

</script>

<script type="text/javascript">
</script>
