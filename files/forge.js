function replaceImage(element, clazz, color) {
  if (color === undefined) color = 'black';
  var elem = document.createElement('i');

  sizeclazz = '';
  switch (Q(element).height()) {
    case 16:
      sizeclazz = clazz + ' fa-lg';
      Q(elem).css('cssText','height: 18px; width: 18px; text-align: center; color: ' + color + ' !important');
      break;
    case 24:
      sizeclazz = clazz + ' fa-2x';
      Q(elem).css('cssText','height: 26px; width: 26px; text-align; center; color: ' + color + ' !important');
      break;
    case 32:
      sizeclazz = clazz + ' fa-3x';
      Q(elem).css('cssText','height: 34px; width: 34px; text-align: center; color: ' + color + ' !important');
      break;
    case 48:
      if (element.parentNode.tagName == 'H1') {
        sizeclazz = clazz + ' fa-3x';
        Q(elem).css('cssText','color: ' + color + ' !important');
      } else {
        sizeclazz = clazz + ' fa-4x';
        Q(elem).css('cssText','height: 50px; width: 50px; text-align: center; color: ' + color + ' !important');
      }
      break;
    default:
      sizeclazz = clazz;
      Q(elem).css('cssText','text-align: center; color: ' + color + ' !important');
  }

  elem.className = sizeclazz;
  elem.innerHTML = element.innerHTML;

  element.parentNode.insertBefore(elem, element);
  element.parentNode.removeChild(element);
  return elem;
}

function replaceImageWithStack(element, bottomClazz, topClazz, overlayColor) {
  var bottom = document.createElement('i');
  var top = document.createElement('i');

  switch (Q(element).height()) {
    case 16:
      element.parentNode.addClassName('fa-stack fa-lg');
      Q(element.parentNode).height('18px');
      Q(element.parentNode).width('18px');
      break;
    case 24:
      element.parentNode.addClassName('fa-stack');
      Q(element.parentNode).height('26px');
      Q(element.parentNode).width('26px');
      break;
    case 32:
      element.parentNode.addClassName('fa-stack fa-3x');
      Q(element.parentNode).height('34px');
      Q(element.parentNode).width('34px');
      break;
    case 48:
      element.parentNode.addClassName('fa-stack fa-4x');
      Q(element.parentNode).height('50px');
      Q(element.parentNode).width('50px');
      break;
  }

  bottom.addClassName(bottomClazz + ' fa-stack-1x');
  bottom.css('cssText','text-align: end');
  top.addClassName(bottomClazz + ' fa-stack-1x');
  top.css('cssText','color: ' +  overlayColor + ' !important');

  element.parentNode.insertBefore(bottom, element);
  element.parentNode.insertBefore(top, element);
  element.parentNode.removeChild(element);
}

function changeIcons() {
  var allIcons = Q('img');
  allIcons.each(function(index) {
    var item = allIcons[index];
    var source = item.getAttribute('src');
    if (source.search('(blue|green)\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle', 'mediumseagreen');
      return;
    } else if (source.search('(blue|green)_anime\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle fa-blink', 'mediumseagreen');
      return;
    } else if (source.search('(aborted|disabled|grey)\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle', 'lightslategrey');
      return;
    } else if (source.search('(aborted|disabled|grey)_anime\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle fa-blink', 'lightslategrey');
      return;
    } else if (source.search('accept\.(png|gif)') > 0 ) {
      replaceImage(item, 'fa fa-check-circle');
      return;
    } else if (source.search('red\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle', 'crimson');
      return;
    } else if (source.search('red_anime\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle fa-blink', 'crimson');
      return;
    } else if (source.search('yellow\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle', 'gold');
      return;
    } else if (source.search('yellow_anime\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle fa-blink', 'gold');
      return;
    } else if (source.search('accept\.(png|gif)') > 0 ) {
      replaceImage(item, 'fa fa-check-circle');
      return;
    } else if (source.search('atom\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-rss');
      return;
    } else if (source.search('attribute\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-tag');
      return;
    } else if (source.search('clipboard\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-clipboard');
      return;
    } else if (source.search('clock\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-rocket');
      return;
    } else if (source.search('clock-anime\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-rocket fa-blink');
      return;
    } else if (source.search('(collapse|document_delete)\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-minus');
      return;
    } else if (source.search('computer\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-desktop');
      return;
    } else if (source.search('computer-flash\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-desktop fa-blink');
      return;
    } else if (source.search('computer-x\.(png|gif)') > 0) {
      replaceImageWithStack(item, 'fa fa-desktop', 'fa fa-times', 'red');
      return;
    } else if (source.search('credentials\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-shield');
      return;
    } else if (source.search('delete\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-trash-o');
      return;
    } else if (source.search('(document_delete|text-error)\.(png|gif)') > 0) {
      replaceImageWithStack(item, 'fa fa-file-text-o', 'fa fa-times', 'red');
      return;
    } else if (source.search('(document|text)\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-file-text-o');
      return;
    } else if (source.search('document-properties\.(png|gif)') > 0) {
      replaceImageWithStack(item, 'fa fa-file-o', 'fa fa-wrench', 'black');
      return;
    } else if (source.search('domain\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-university');
      return;
    } else if (source.search('(expand|document_add)\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-plus');
      return;
    } else if (source.search('fingerprint\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-list-alt');
      return;
    } else if (source.search('flags\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-language');
      Q(i).css('cssText','color: white !important');
      return;
    } else if (source.search('folder\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-folder-o');
      return;
    } else if (source.search('folder-(error|delete)\.(png|gif)') > 0) {
      replaceImageWithStack(item, 'fa fa-folder-o', 'fa fa-times', 'red');
      return;
    } else if (source.search('folder-open\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-folder-open-o');
      return;
    } else if (source.search('gear(2){0,1}\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-cog');
      return;
    } else if (source.search('git.*\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-git');
      return;
    } else if (source.search('graph\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-bar-chart-o');
      return;
    } else if (source.search('(go-){0,1}next\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-arrow-circle-o-right');
      return;
    } else if (source.search('health-00to19\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-flash');
      return;
    } else if (source.search('health-20to39\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-umbrella');
      return;
    } else if (source.search('health-40to59\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-cloud');
      return;
    } else if (source.search('health-60to79\.(png|gif)') > 0) {
      replaceImageWithStack(item, 'fa fa-sun-o', 'fa-cloud', 'black');
      return;
    } else if (source.search('health-80plus\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-sun-o');
      return;
    } else if (source.search('help\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-question-circle');
      return;
    } else if (source.search('hourglass\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-clock-o');
      return;
    } else if (source.search('installer\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-download');
      return;
    } else if (source.search('lock\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-lock');
      return;
    } else if (source.search('monitor\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-tachometer');
      return;
    } else if (source.search('network\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-sitemap');
      return;
    } else if (source.search('new-credential\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-key');
      return;
    } else if (source.search('new-package\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-plus-square');
      return;
    } else if (source.search('new-user\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-user');
      return;
    } else if (source.search('(notepad|document_edit)\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-edit');
      return;
    } else if (source.search('orange-square\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-magic');
      return;
    } else if (source.search('package\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-archive');
      return;
    } else if (source.search('person\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-user');
      return;
    } else if (source.search('plugin\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-puzzle-piece');
      return;
    } else if (source.search('previous\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-arrow-circle-o-left');
      return;
    } else if (source.search('redo\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-reply');
      return;
    } else if (source.search('refresh\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-refresh');
      return;
    } else if (source.search('save\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-save');
      return;
    } else if (source.search('secure\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-lock');
      return;
    } else if (source.search('search\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-search');
      return;
    } else if (source.search('setting\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-sliders');
      return;
    } else if (source.search('stop\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-times-circle');
      return;
    } else if (source.search('system-log-out\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-power-off');
      return;
    } else if (source.search('terminal\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-terminal');
      return;
    } else if (source.search('title\.(png|gif)') > 0) {
      i = document.createElement('h1');
      i.innerHTML = 'Jenkins';
      Q(i).css('cssText', 'color: black !important');

      item.parentNode.insertBefore(i, item);
      item.parentNode.removeChild(item);
      return;
    } else if (source.search('up\.(png|gif)') > 0) {
      i = replaceImage(item, 'fa fa-arrow-circle-o-up');
      return;
    } else if (source.search('user\.(png|gif)') > 0) {
      if (item.parentNode.hasAttribute('href') && item.parentNode.getAttribute('href').indexOf('asynchPeople') > 0) {
        i = replaceImage(item, 'fa fa-users');
      } else {
        i = replaceImage(item, 'fa fa-user');
      } 
      return;
    } else if (source.search('warning\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-warning');
    }
  });
  errorSpans = Q('.error');
  errorSpans.each(function(index) {
    var origHTML = errorSpans[index].innerHTML;
    errorSpans[index].innerHTML = '<i class="fa fa-minus-circle fa-2x"></i> ' + origHTML;
  });
}

typography = document.createElement('link');
typography.rel="stylesheet";
typography.type="text/css";
typography.href="//cloud.typography.com/7101492/690064/css/fonts.css";
document.head.appendChild(typography);

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

Q( document ).ready(function() {
  Q('link[rel="shortcut icon"]').attr('href','/img/FORGE_favicon.ico');
  var emailInputs = Q("input[name='email.address'");
  emailInputs.each(function(item) {
    emailInputs[item].disabled = true;
  });

  changeIcons();

  var validationObserver = new MutationObserver(function() {
    var warningAreas = Q(".warning", ".validation-error-area");
    var errorAreas = Q(".error", ".validation-error-area"); 
    warningAreas.each(function(pos) {
      Q(warningAreas[pos]).css('background-image','none');
      if (Q(warningAreas[pos]).children()[0].tagName != 'I') {
        var warningIcon = document.createElement('i');
        warningIcon.addClassName('fa fa-warning');
        Q(warningAreas[pos]).prepend(warningIcon);
      }
    });
    errorAreas.each(function(pos) {
      Q(errorAreas[pos]).css('background-image','none');
      if (Q(errorAreas[pos]).children()[0].tagName != 'I') {
        var errorIcon = document.createElement('i');
        errorIcon.addClassName('fa fa-minus-circle');
        Q(errorAreas[pos]).prepend(errorIcon);
      }
    });
  });

  Q('.validation-error-area').each(function( item ) {
    validationObserver.observe(Q('.validation-error-area')[item], {
      subtree: true,
      childList: true
    });
  });

  var queueObserver = new MutationObserver(function() {
    queueIcon = Q('img',('#buildQueue'))[0];
    execIcon = Q('img',('#executors'))[0];
    if (queueIcon) {
      if (queueIcon.src.search('collapse\.(png|gif)') > 0) {
          replaceImage(queueIcon, 'fa fa-minus');
      } else {
          replaceImage(queueIcon, 'fa fa-plus');
      }
    }
    if (execIcon) {
      if (execIcon.src.search('collapse\.(png|gif)') > 0) {
          replaceImage(execIcon, 'fa fa-minus');
      } else {
          replaceImage(execIcon, 'fa fa-plus');
      }
    }
  });

  Q('#navigation').each(function(item) {
    queueObserver.observe(Q('#navigation')[item], {
      subtree: true,
      childList: true
    });
  });

  var breadcrumbObserver = new MutationObserver(function() {
   changeIcons();
  });
  Q('#breadcrumb-menu-target').each(function(item) {
    breadcrumbObserver.observe(Q('#breadcrumb-menu-target')[item], {
      subtree: true,
      childList: true
    });
  });
  Q('#people').each(function(item) {
    breadcrumbObserver.observe(Q('#people')[item], {
      subtree: true,
      childList: true
    });
  });
  Q('#projectStatus').each(function(item) {
    breadcrumbObserver.observe(Q('#projectStatus')[item], {
      subtree: true,
      childList: true
    });
  });
  Q('#trend').each(function(item) {
    breadcrumbObserver.observe(Q('#trend')[item], {
      subtree: true,
      childList: true
    });
  });
});
