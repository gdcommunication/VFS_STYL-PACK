<%@ Control Language="C#" ClassName="CorrectionBlocage" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="QFRaisonBlocage_lbl" AssociatedControlID="QFRaisonBlocage" runat="server" Text="<%$ resources: QFRaisonBlocage.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="QFRaisonBlocage" ReadOnly="true"  dojoType="Sage.UI.Controls.TextBox" MaxLength="1028"  />
  </div>

      </td>
            </tr>
<tr>
            <td  colspan="2" >
 <div class="twocollbl alignleft" >
   <asp:Label ID="QFRemarques_lbl" AssociatedControlID="QFRemarques" runat="server" Text="<%$ resources: QFRemarques.Caption %>" ></asp:Label>
 </div>
  <div  class="twocoltextcontrol"   >
<asp:TextBox runat="server" ID="QFRemarques"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
            </tr>
<tr>
            <td></td>
                <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="QFDebloque"  Text="<%$ resources: QFDebloque.Caption %>"  CssClass=""
LabelPlacement="left"  />
</div>
      </td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="CorrectionBlocage_RTools" ToolbarLocation="right">
    <asp:ImageButton runat="server" ID="QFSAVE"
ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
 
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=CorrectionBlocage&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkCorrectionBlocageHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="CorrectionBlocage" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.IVALIDATIONCDE); }
}

 

protected override void OnAddEntityBindings() {
                 // QFRaisonBlocage.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFRaisonBlocageTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("RaisonBlocage", QFRaisonBlocage, "Text");
        BindingSource.Bindings.Add(QFRaisonBlocageTextBinding);
          
   
    }
                     
protected void QFSAVE_ClickAction(object sender, EventArgs e) {
Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
Object[] methodArgs = new Object[] { FormAdapter, e };
lib.Execute("CorrectionBlocage.QFSAVE_OnClick", methodArgs);
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
 QFSAVE.Click += new ImageClickEventHandler(QFSAVE_ClickAction);
QFSAVE.Click += new ImageClickEventHandler(DialogService.CloseEventHappened);
QFSAVE.Click += new ImageClickEventHandler(Refresh);


}

protected void quickformload0(object sender, EventArgs e) {
    Sage.Entity.Interfaces.IVALIDATIONCDE validation = this.BindingSource.Current as Sage.Entity.Interfaces.IVALIDATIONCDE;
    
	if (validation.Debloquee == null) 
	{
			QFDebloque.Checked =  false;
	}
	else
	{
			QFDebloque.Checked = validation.Debloquee.ToString().Equals("1") ? true : false;
	}


}
private bool _runActivating;
protected override void OnActivating()
{
_runActivating = true;
}
private void DoActivating()
{
quickformload0(this, EventArgs.Empty);

}
protected override void OnFormBound()
{
Sage.Platform.WebPortal.EntityPage epage = Page as Sage.Platform.WebPortal.EntityPage;
        if (epage != null)
            _runActivating = (epage.IsNewEntity || _runActivating);
if (_runActivating) DoActivating();
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
    get { return _formAdapter ?? (_formAdapter = new CorrectionBlocageAdapter(this)); }
}

public class CorrectionBlocageAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.ICorrectionBlocage
{
    public CorrectionBlocageAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ITextBoxControl _QFRaisonBlocage;
    public  Sage.Platform.Controls.ITextBoxControl QFRaisonBlocage
    {
        get { return FindControl(ref _QFRaisonBlocage, "QFRaisonBlocage"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _QFRemarques;
    public  Sage.Platform.Controls.ITextBoxControl QFRemarques
    {
        get { return FindControl(ref _QFRemarques, "QFRemarques"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _QFDebloque;
    public  Sage.Platform.Controls.ICheckBoxControl QFDebloque
    {
        get { return FindControl(ref _QFDebloque, "QFDebloque"); }
    }
    private Sage.Platform.Controls.IButtonControl _QFSAVE;
    public  Sage.Platform.Controls.IButtonControl QFSAVE
    {
        get { return FindControl(ref _QFSAVE, "QFSAVE"); }
    }

    public  void QFSAVE_OnClick(System.EventArgs e)
    {
        Sage.Platform.DynamicMethod.DynamicMethodLibrary lib = Sage.Platform.Orm.DynamicMethodLibraryHelper.Instance;
        Object[] methodArgs = new Object[] { this, e };
        lib.Execute("CorrectionBlocage.QFSAVE_OnClick", methodArgs);
    }
}

</script>

<script type="text/javascript">
</script>
