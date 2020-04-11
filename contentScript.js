
$(window).on('load',()=>{
	setTimeout(() => {
		if(!$('div.newprojectcard').length > 0 && !!JSON.parse(window.localStorage.getItem('microbit/editorSettings')).fileHistory[0].pos.lineNumber){
			document.querySelector('body').classList.add('only_javascript_on');
		}else{
			document.querySelector('body').classList.remove('only_javascript_on');
		}
	}, 3000);

	var isCtrl, isAlt;  // ctrl. Alt 눌림 여부 확인

	document.onkeyup = function (e) {
		if (e.which == 17) isCtrl = false;
		if (e.which == 18) isAlt = false;

	}

	document.onkeydown = function (e) {
		if (e.which == 17) isCtrl = true;
		if (e.which == 18) isAlt = true;

		// console.log(e.which, isCtrl, isAlt);
		if (e.which == 90 && isCtrl == true && isAlt == true) {  // Ctrl + Alt + z
			if (document.querySelector('body').classList.contains('only_javascript_on')){
				if ($('div.editor-menuitem').hasClass('show_important')){
					$('div.editor-menuitem').removeClass('show_important');
				}else{
					$('div.editor-menuitem').addClass('show_important');
				}
			}
			return false;
		}
	}
});
$(window).on('click', (event) => {
	const _tar = event.target;
	if(_tar.closest('div.javascript-menuitem')){
		document.querySelector('body').classList.add('only_javascript_on');
	}
	if (_tar.closest('div.blocks-menuitem')) {
		document.querySelector('body').classList.remove('only_javascript_on');
		$('div.editor-menuitem').removeClass('show_important');
	}
	if (_tar.closest('div.ui.card.link.file')){
		setTimeout(() => {
			if(!!JSON.parse(window.localStorage.getItem('microbit/editorSettings')).fileHistory[0].pos.lineNumber){
				document.querySelector('body').classList.add('only_javascript_on');
			} else {
				document.querySelector('body').classList.remove('only_javascript_on');
				$('div.editor-menuitem').removeClass('show_important');
			}
		}, 2000);
	}
	if (_tar.closest('div.newprojectcard')){
		document.querySelector('body').classList.remove('only_javascript_on');
		$('div.editor-menuitem').removeClass('show_important');
	}
});