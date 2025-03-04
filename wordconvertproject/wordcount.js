(function(){
    var countField  = document.getElementById('countfield');
    var countLabel  = document.getElementById('countlabel');
    var countNum    = document.getElementById('countnumber');

    function _handleKeyUp(e){
        var limit   = Number(this.getAttribute('data-count-limit'));
        var text    = this.value;

        countNum.textContent = text.length;


    }

    countField.addEventListener('keyup', _handleKeyUp, false);
}());