<%@ Control Language="C#" ClassName="AddEditTicketActivityItem" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
         <col width="100%" />
     <tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="lueProduct_lbl" AssociatedControlID="lueProduct" runat="server" Text="<%$ resources: lueProduct.Caption %>" ></asp:Label>
 </div>   
  <div   class="textcontrol lookup"   >
<SalesLogix:LookupControl runat="server" ID="lueProduct" ButtonToolTip="<%$ resources: lueProduct.ButtonToolTip %>" ReadOnly="true" Enabled="false" EnableLookup="false" LookupEntityName="Product" LookupEntityTypeName="Sage.Entity.Interfaces.IProduct, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"  >
<LookupProperties>
</LookupProperties>
<LookupPreFilters>
</LookupPreFilters>
</SalesLogix:LookupControl>
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtSKU_lbl" AssociatedControlID="txtSKU" runat="server" Text="<%$ resources: txtSKU.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtSKU" Enabled="false" ReadOnly="true"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtSerialNumber_lbl" AssociatedControlID="txtSerialNumber" runat="server" Text="<%$ resources: txtSerialNumber.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtSerialNumber"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
<div class=" lbl alignleft">
    <asp:Label ID="curPrice_lbl" AssociatedControlID="curPrice" runat="server" Text="<%$ resources: curPrice.Caption %>" ></asp:Label>
</div>
 <div  class="textcontrol currency"  >
    <SalesLogix:Currency
    runat="server"
    ID="curPrice" 
    ExchangeRateType="BaseRate"
     Required="false"
 DecimalDigits="-1"
 />
</div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtDescription_lbl" AssociatedControlID="txtDescription" runat="server" Text="<%$ resources: txtDescription.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtDescription"  Rows="3" TextMode="MultiLine" Columns="40" dojoType="Sage.UI.Controls.SimpleTextarea" MultiLineMaxLength="80"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
<asp:Panel runat="server" ID="ctrlstButtons" CssClass="controlslist qfActionContainer"
>
   <asp:Button runat="server" ID="cmdOK"
 Text="<%$ resources: cmdOK.Caption %>" CssClass="slxbutton"  />
   
   <asp:Button runat="server" ID="cmdCancel"
 Text="<%$ resources: cmdCancel.Caption %>" CssClass="slxbutton"  />
 
</asp:Panel>
      </td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="AddEditTicketActivityItem_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=AddEditTicketActivityItem&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkAddEditTicketActivityItemHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="AddEditTicketActivityItem" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.ITicketActivityItem); }
}

 

protected override void OnAddEntityBindings() {
                 // lueProduct.LookupResultValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding lueProductLookupResultValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("Product", lueProduct, "LookupResultValue");
        BindingSource.Bindings.Add(lueProductLookupResultValueBinding);
                    // txtSKU.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtSKUTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("AccountProduct.ActualId", txtSKU, "Text");
        BindingSource.Bindings.Add(txtSKUTextBinding);
                    // txtSerialNumber.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtSerialNumberTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("AccountProduct.SerialNumber", txtSerialNumber, "Text");
        BindingSource.Bindings.Add(txtSerialNumberTextBinding);
                    // curPrice.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding curPriceTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ItemAmount", curPrice, "Text");
        BindingSource.Bindings.Add(curPriceTextBinding);
                    // txtDescription.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtDescriptionTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ItemDescription", txtDescription, "Text");
        BindingSource.Bindings.Add(txtDescriptionTextBinding);
             
   
}
                                                        
protected void cmdOK_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.ITicketActivityItem _entity = BindingSource.Current as Sage.Entity.Interfaces.ITicketActivityItem;
  if (_entity != null)
  {
    object _parent = GetParentEntity();
    if (DialogService.ChildInsertInfo != null)
    {
        if (_parent != null)
        {
            if (DialogService.ChildInsertInfo.ParentReferenceProperty != null)
            {
                DialogService.ChildInsertInfo.ParentReferenceProperty.SetValue(_entity, _parent, null);
            }
        }
    }
    bool shouldSave = true;
    Sage.Platform.WebPortal.EntityPage page = Page as Sage.Platform.WebPortal.EntityPage;
    if (page != null)
    {
        if(IsInDialog() && page.ModeId.ToUpper() == "INSERT")
        {
            shouldSave = false;
        }
    }

    if(shouldSave)
    {
       _entity.Save();
    }

    if (_parent != null)
    {
        if (DialogService.ChildInsertInfo != null)
        {
           if (DialogService.ChildInsertInfo.ParentsCollectionProperty != null)
           {
              System.Reflection.MethodInfo _add = DialogService.ChildInsertInfo.ParentsCollectionProperty.PropertyType.GetMethod("Add");
              _add.Invoke(DialogService.ChildInsertInfo.ParentsCollectionProperty.GetValue(_parent, null), new object[] { _entity });
           }
        }
     }
  }

          cmdOK_ClickActionBRC(sender, e);
    
  
}
protected void cmdOK_ClickActionBRC(object sender, EventArgs e) {
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
 cmdOK.Click += new EventHandler(cmdOK_ClickAction);
cmdOK.Click += new EventHandler(DialogService.CloseEventHappened);
cmdOK.Click += new EventHandler(Refresh);
cmdCancel.Click += new EventHandler(DialogService.CloseEventHappened);


}

protected override void OnFormBound()
{
ClientBindingMgr.RegisterSaveButton(cmdOK);

ScriptManager.RegisterStartupScript(Page, GetType(), "cleanupcontainer", "jQuery(\".controlslist > div:empty\").remove();", true);
if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
{
btnEditForm.Visible = false;
}
ClientBindingMgr.RegisterDialogCancelButton(cmdCancel);


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
    get { return _formAdapter ?? (_formAdapter = new AddEditTicketActivityItemAdapter(this)); }
}

public class AddEditTicketActivityItemAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IAddEditTicketActivityItem
{
    public AddEditTicketActivityItemAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ILookupControl _lueProduct;
    public  Sage.Platform.Controls.ILookupControl lueProduct
    {
        get { return FindControl(ref _lueProduct, "lueProduct"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtSKU;
    public  Sage.Platform.Controls.ITextBoxControl txtSKU
    {
        get { return FindControl(ref _txtSKU, "txtSKU"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtSerialNumber;
    public  Sage.Platform.Controls.ITextBoxControl txtSerialNumber
    {
        get { return FindControl(ref _txtSerialNumber, "txtSerialNumber"); }
    }
    private Sage.Platform.Controls.ICurrencyControl _curPrice;
    public  Sage.Platform.Controls.ICurrencyControl curPrice
    {
        get { return FindControl(ref _curPrice, "curPrice"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtDescription;
    public  Sage.Platform.Controls.ITextBoxControl txtDescription
    {
        get { return FindControl(ref _txtDescription, "txtDescription"); }
    }
    private Sage.Platform.Controls.IControlsListControl _ctrlstButtons;
    public  Sage.Platform.Controls.IControlsListControl ctrlstButtons
    {
        get { return FindControl(ref _ctrlstButtons, "ctrlstButtons"); }
    }
    private Sage.Platform.Controls.IButtonControl _cmdOK;
    public  Sage.Platform.Controls.IButtonControl cmdOK
    {
        get { return FindControl(ref _cmdOK, "cmdOK"); }
    }
    private Sage.Platform.Controls.IButtonControl _cmdCancel;
    public  Sage.Platform.Controls.IButtonControl cmdCancel
    {
        get { return FindControl(ref _cmdCancel, "cmdCancel"); }
    }

}

</script>

<script type="text/javascript">
</script>
