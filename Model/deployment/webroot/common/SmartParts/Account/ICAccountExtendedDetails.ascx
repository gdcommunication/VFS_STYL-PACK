<%@ Control Language="C#" ClassName="ICAccountExtendedDetails" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
 <div class=" lbl alignleft" >
   <asp:Label ID="txtAccount_lbl" AssociatedControlID="txtAccount" runat="server" Text="<%$ resources: txtAccount.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtAccount"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtFinanceStatus_lbl" AssociatedControlID="txtFinanceStatus" runat="server" Text="<%$ resources: txtFinanceStatus.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtFinanceStatus"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="dtpDateOpened_lbl" AssociatedControlID="dtpDateOpened" runat="server" Text="<%$ resources: dtpDateOpened.Caption %>" ></asp:Label>
 </div>
   <div  class="textcontrol datepicker"  >
    <SalesLogix:DateTimePicker runat="server" ID="dtpDateOpened" ReadOnly="true" DisplayTime="false" Timeless="true" />
  </div>

      </td>
                <td  >
<div class=" lbl alignleft">
    <asp:Label ID="curBalance_lbl" AssociatedControlID="curBalance" runat="server" Text="<%$ resources: curBalance.Caption %>" ></asp:Label>
</div>
 <div  class="textcontrol currency"  >
    <SalesLogix:Currency
    runat="server"
    ID="curBalance" 
    ExchangeRateType="BaseRate"
     Required="false"
 DecimalDigits="-1"
 />
</div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklStatus_lbl" AssociatedControlID="pklStatus" runat="server" Text="<%$ resources: pklStatus.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklStatus" PickListName="Account Status" MustExistInList="false"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="dtpBalanceDate_lbl" AssociatedControlID="dtpBalanceDate" runat="server" Text="<%$ resources: dtpBalanceDate.Caption %>" ></asp:Label>
 </div>
   <div  class="textcontrol datepicker"  >
    <SalesLogix:DateTimePicker runat="server" ID="dtpBalanceDate" ReadOnly="true" DisplayTime="false" Timeless="true" />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft">
   <asp:Label ID="pklDeliveryMethod_lbl" AssociatedControlID="pklDeliveryMethod" runat="server" Text="<%$ resources: pklDeliveryMethod.Caption %>" ></asp:Label>
 </div>   
   <div  class="textcontrol picklist"  > 
    <SalesLogix:PickListControl runat="server" ID="pklDeliveryMethod" PickListName="Delivery Methods" MustExistInList="false"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtFinanceLimit_lbl" AssociatedControlID="txtFinanceLimit" runat="server" Text="<%$ resources: txtFinanceLimit.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtFinanceLimit"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
<tr>
            <td></td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="txtPaymentTerms_lbl" AssociatedControlID="txtPaymentTerms" runat="server" Text="<%$ resources: txtPaymentTerms.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="txtPaymentTerms"  dojoType="Sage.UI.Controls.TextBox"  />
  </div>

      </td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="ICAccountExtendedDetails_RTools" ToolbarLocation="right">
    <asp:ImageButton runat="server" ID="btnSave"
ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
   
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=ICAccountExtendedDetails&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkICAccountExtendedDetailsHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="ICAccountExtendedDetails" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
                 // txtAccount.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtAccountTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.ShortName", txtAccount, "Text");
        BindingSource.Bindings.Add(txtAccountTextBinding);
                    // txtFinanceStatus.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtFinanceStatusTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.FinanceStatusText", txtFinanceStatus, "Text");
        BindingSource.Bindings.Add(txtFinanceStatusTextBinding);
                    // dtpDateOpened.DateTimeValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding dtpDateOpenedDateTimeValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.OpenedDate", dtpDateOpened, "DateTimeValue");
        BindingSource.Bindings.Add(dtpDateOpenedDateTimeValueBinding);
                    // curBalance.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding curBalanceTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.FinanceBalance", curBalance, "Text");
        BindingSource.Bindings.Add(curBalanceTextBinding);
                    // pklStatus.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklStatusPickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.ErpStatus", pklStatus, "PickListValue");
        BindingSource.Bindings.Add(pklStatusPickListValueBinding);
                    // dtpBalanceDate.DateTimeValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding dtpBalanceDateDateTimeValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.FinanceBalanceDate", dtpBalanceDate, "DateTimeValue");
        BindingSource.Bindings.Add(dtpBalanceDateDateTimeValueBinding);
                    // pklDeliveryMethod.PickListValue Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding pklDeliveryMethodPickListValueBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.DeliveryMethod", pklDeliveryMethod, "PickListValue");
        BindingSource.Bindings.Add(pklDeliveryMethodPickListValueBinding);
                    // txtFinanceLimit.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtFinanceLimitTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.FinanceLimit", txtFinanceLimit, "Text");
        BindingSource.Bindings.Add(txtFinanceLimitTextBinding);
                    // txtPaymentTerms.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding txtPaymentTermsTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("ERPTradingAccount.PaymentTerms", txtPaymentTerms, "Text");
        BindingSource.Bindings.Add(txtPaymentTermsTextBinding);
    
   
    }
                                                               
protected void btnSave_ClickAction(object sender, EventArgs e) {
  Sage.Entity.Interfaces.IAccount _entity = BindingSource.Current as Sage.Entity.Interfaces.IAccount;
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

  
}

protected override void OnWireEventHandlers()
{
 base.OnWireEventHandlers();
 btnSave.Click += new ImageClickEventHandler(btnSave_ClickAction);


}

protected override void OnFormBound()
{
ClientBindingMgr.RegisterSaveButton(btnSave);

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
    get { return _formAdapter ?? (_formAdapter = new ICAccountExtendedDetailsAdapter(this)); }
}

public class ICAccountExtendedDetailsAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.IICAccountExtendedDetails
{
    public ICAccountExtendedDetailsAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ITextBoxControl _txtAccount;
    public  Sage.Platform.Controls.ITextBoxControl txtAccount
    {
        get { return FindControl(ref _txtAccount, "txtAccount"); }
    }
    private Sage.Platform.Controls.IDateTimePickerControl _dtpDateOpened;
    public  Sage.Platform.Controls.IDateTimePickerControl dtpDateOpened
    {
        get { return FindControl(ref _dtpDateOpened, "dtpDateOpened"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklStatus;
    public  Sage.Platform.Controls.IPickListControl pklStatus
    {
        get { return FindControl(ref _pklStatus, "pklStatus"); }
    }
    private Sage.Platform.Controls.IPickListControl _pklDeliveryMethod;
    public  Sage.Platform.Controls.IPickListControl pklDeliveryMethod
    {
        get { return FindControl(ref _pklDeliveryMethod, "pklDeliveryMethod"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtFinanceStatus;
    public  Sage.Platform.Controls.ITextBoxControl txtFinanceStatus
    {
        get { return FindControl(ref _txtFinanceStatus, "txtFinanceStatus"); }
    }
    private Sage.Platform.Controls.ICurrencyControl _curBalance;
    public  Sage.Platform.Controls.ICurrencyControl curBalance
    {
        get { return FindControl(ref _curBalance, "curBalance"); }
    }
    private Sage.Platform.Controls.IDateTimePickerControl _dtpBalanceDate;
    public  Sage.Platform.Controls.IDateTimePickerControl dtpBalanceDate
    {
        get { return FindControl(ref _dtpBalanceDate, "dtpBalanceDate"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtFinanceLimit;
    public  Sage.Platform.Controls.ITextBoxControl txtFinanceLimit
    {
        get { return FindControl(ref _txtFinanceLimit, "txtFinanceLimit"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _txtPaymentTerms;
    public  Sage.Platform.Controls.ITextBoxControl txtPaymentTerms
    {
        get { return FindControl(ref _txtPaymentTerms, "txtPaymentTerms"); }
    }
    private Sage.Platform.Controls.IButtonControl _btnSave;
    public  Sage.Platform.Controls.IButtonControl btnSave
    {
        get { return FindControl(ref _btnSave, "btnSave"); }
    }

}

</script>

<script type="text/javascript">
</script>
