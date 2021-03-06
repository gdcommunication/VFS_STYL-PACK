<script language="javascript" type="text/javascript">

var cmdCloseCtrlId = "@cmdCloseCtrlId";
var _IsCompleted = false;

function DeDup_InvokeClickEvent(control)
{
   if (document.createEvent)
   {
       // FireFox
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      control.dispatchEvent(e);      
   }
   else
   {
       // IE
       control.click();
   }
}

function DeDup_OnUpdateProgress(progressArea, args) {
    if (typeof args === 'object' && args !== null && typeof args.get_progressData === 'function') {
        var progData = args.get_progressData();
        if (progData.ProcessCompleted === 'True') {
            if (_IsCompleted) {
                return false;
            }
            var elementStartCtrl = document.getElementById(cmdCloseCtrlId);
            if (elementStartCtrl != null) {
                DeDup_InvokeClickEvent(elementStartCtrl);
            }
            _IsCompleted = true;
            return false;
        }
    }
}

</script>
