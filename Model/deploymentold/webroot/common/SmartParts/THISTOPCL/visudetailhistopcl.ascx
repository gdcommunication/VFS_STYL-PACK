<%@ Control Language="C#" ClassName="visudetailhistopcl" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
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
         <col width="33%" />
            <col width="33%" />
            <col width="33%" />
     <tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="QFTextBox_lbl" AssociatedControlID="QFTextBox" runat="server" Text="<%$ resources: QFTextBox.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="QFTextBox"  dojoType="Sage.UI.Controls.TextBox" MaxLength="64"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="QFTextBox1_lbl" AssociatedControlID="QFTextBox1" runat="server" Text="<%$ resources: QFTextBox1.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="QFTextBox1"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="QFTextBox2_lbl" AssociatedControlID="QFTextBox2" runat="server" Text="<%$ resources: QFTextBox2.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="QFTextBox2"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
      </tr>
<tr>
            <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="QFTextBox3_lbl" AssociatedControlID="QFTextBox3" runat="server" Text="<%$ resources: QFTextBox3.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="QFTextBox3"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="QFTextBox4_lbl" AssociatedControlID="QFTextBox4" runat="server" Text="<%$ resources: QFTextBox4.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="QFTextBox4"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
                <td  >
 <div class=" lbl alignleft" >
   <asp:Label ID="QFTextBox5_lbl" AssociatedControlID="QFTextBox5" runat="server" Text="<%$ resources: QFTextBox5.Caption %>" ></asp:Label>
 </div>
  <div  class="textcontrol"   >
<asp:TextBox runat="server" ID="QFTextBox5"  dojoType="Sage.UI.Controls.TextBox" MaxLength="128"  />
  </div>

      </td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="visudetailhistopcl_RTools" ToolbarLocation="right">
  <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=visudetailhistopcl&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>
 
 
 
 
 <SalesLogix:PageLink ID="lnkvisudetailhistopclHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="visudetailhistopcl" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
    get { return typeof(Sage.Entity.Interfaces.ITHISTOPCL); }
}

 

protected override void OnAddEntityBindings() {
                 // QFTextBox.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBoxTextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("FAMILLE", QFTextBox, "Text");
        BindingSource.Bindings.Add(QFTextBoxTextBinding);
                    // QFTextBox1.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox1TextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("INFO2", QFTextBox1, "Text");
        BindingSource.Bindings.Add(QFTextBox1TextBinding);
                    // QFTextBox2.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox2TextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("INFO3", QFTextBox2, "Text");
        BindingSource.Bindings.Add(QFTextBox2TextBinding);
                    // QFTextBox3.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox3TextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("INFO4", QFTextBox3, "Text");
        BindingSource.Bindings.Add(QFTextBox3TextBinding);
                    // QFTextBox4.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox4TextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("INFO5", QFTextBox4, "Text");
        BindingSource.Bindings.Add(QFTextBox4TextBinding);
                    // QFTextBox5.Text Binding
        Sage.Platform.WebPortal.Binding.WebEntityBinding QFTextBox5TextBinding = new Sage.Platform.WebPortal.Binding.WebEntityBinding("INFO6", QFTextBox5, "Text");
        BindingSource.Bindings.Add(QFTextBox5TextBinding);
    
   
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
    get { return _formAdapter ?? (_formAdapter = new visudetailhistopclAdapter(this)); }
}

public class visudetailhistopclAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter, Sage.Form.Interfaces.Ivisudetailhistopcl
{
    public visudetailhistopclAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.ITextBoxControl _QFTextBox;
    public  Sage.Platform.Controls.ITextBoxControl QFTextBox
    {
        get { return FindControl(ref _QFTextBox, "QFTextBox"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _QFTextBox3;
    public  Sage.Platform.Controls.ITextBoxControl QFTextBox3
    {
        get { return FindControl(ref _QFTextBox3, "QFTextBox3"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _QFTextBox1;
    public  Sage.Platform.Controls.ITextBoxControl QFTextBox1
    {
        get { return FindControl(ref _QFTextBox1, "QFTextBox1"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _QFTextBox4;
    public  Sage.Platform.Controls.ITextBoxControl QFTextBox4
    {
        get { return FindControl(ref _QFTextBox4, "QFTextBox4"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _QFTextBox2;
    public  Sage.Platform.Controls.ITextBoxControl QFTextBox2
    {
        get { return FindControl(ref _QFTextBox2, "QFTextBox2"); }
    }
    private Sage.Platform.Controls.ITextBoxControl _QFTextBox5;
    public  Sage.Platform.Controls.ITextBoxControl QFTextBox5
    {
        get { return FindControl(ref _QFTextBox5, "QFTextBox5"); }
    }

}

</script>

<script type="text/javascript">
</script>