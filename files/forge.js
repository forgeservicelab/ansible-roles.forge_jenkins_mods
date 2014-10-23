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
  var stack = document.createElement('span');
  var bottom = document.createElement('i');
  var top = document.createElement('i');

  switch (Q(element).height() || element.height) {
    case 16:
      stack.addClassName('fa-stack fa-lg');
      Q(stack).height('18px');
      Q(stack).width('18px');
      break;
    case 24:
      stack.addClassName('fa-stack fa-2x');
      Q(stack).height('26px');
      Q(stack).width('26px');
      break;
    case 32:
      stack.addClassName('fa-stack fa-3x');
      Q(stack).height('34px');
      Q(stack).width('34px');
      break;
    case 48:
      stack.addClassName('fa-stack fa-4x');
      Q(stack).height('50px');
      Q(stack).width('50px');
      break;
  }

  bottom.addClassName(bottomClazz + ' fa-stack-1x');
  Q(bottom).css('cssText','color: black !important');
  top.addClassName(topClazz + ' fa-stack-1x');
  Q(top).css('cssText','color: ' +  overlayColor + ' !important; text-align: center;');

  stack.appendChild(bottom);
  stack.appendChild(top);

  element.parentNode.insertBefore(stack, element);
  element.parentNode.removeChild(element);

  return [top, bottom];
}

function changeIcons() {
  Q('img').each(function() {
    var item = this;
    var source = item.getAttribute('src');
    if (source.search('star.*\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-star-o', 'black');
      return;
    } else if (source.search('(blue|green)\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle', 'mediumseagreen');
      return;
    } else if (source.search('(blue|green)_anime\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle fa-blink', 'mediumseagreen');
      return;
    } else if (source.search('(aborted|disabled|grey|nobuilt)\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-circle', 'lightslategrey');
      return;
    } else if (source.search('(aborted|disabled|grey|nobuilt)_anime\.(png|gif)') > 0) {
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
    } else if (source.search('checkstyle-\\d{2}x\\d{2}\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-drupal');
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
      var stacked = replaceImageWithStack(item, 'fa fa-file-o', 'fa fa-wrench', 'black');
      Q(stacked[0].parentNode).removeClass('fa-2x');
      Q(stacked[0]).css('-webkit-transform', 'scale(-1,1)');
      Q(stacked[0]).css('-moz-transform', 'scale(-1,1)');
      Q(stacked[0]).css('-ms-transform', 'scale(-1,1)');
      Q(stacked[0]).css('-o-transform', 'scale(-1,1)');
      Q(stacked[0]).css('transform', 'scale(-1,1)');
      Q(stacked[0]).css('top', '10%');
      Q(stacked[1]).removeClass('fa-stack-1x');
      Q(stacked[1]).addClass('fa-stack-2x');
      Q(stacked[1]).css('text-align', 'start');
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
      var stacked = replaceImageWithStack(item, 'fa fa-sun-o', 'fa fa-cloud', 'black');
      Q(stacked[0]).css('top', '-25%');
      Q(stacked[0]).css('left', '35%');
      Q(stacked[1]).css('top', '-40%');
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
    } else if (source.search('robot(-large){0,1}\.(png|gif)') > 0) {
      replaceImage(item, 'fa fa-android');
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
    } else if (source.search('selenium\.(png|gif)') > 0) {
      stacked = replaceImageWithStack(item, 'fa fa-square-o', 'fa fa-check', 'black');
      if (stacked[0].parentNode.parentNode.tagName != 'H2') {
        Q(stacked[0].parentNode).removeClass('fa-2x');
        Q(stacked[0].parentNode).addClass('fa-lg');
        Q(stacked[0]).css('top', '-30%');
        Q(stacked[0]).css('left', '10%');
        Q(stacked[0]).css('font-size', 'large');
        Q(stacked[1]).css('font-size', 'x-large');
      } else {
        Q(stacked[0].parentNode).height('');
        Q(stacked[0].parentNode).width('');
        Q(stacked[0]).css('top', '-20%');
        Q(stacked[0]).css('left', '15%');
      }
      Q(stacked[1]).removeClass('fa-stack-1x');
      Q(stacked[1]).addClass('fa-stack-2x');
      Q(stacked[1]).css('text-align', 'start');
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
  Q('.error').each(function(index) {
    Q(this).css('background-image', 'none');
    var origHTML = this.innerHTML;
    this.innerHTML = '<i class="fa fa-minus-circle fa-2x"></i> ' + origHTML;
  });
}

function linkId (string) {
  return string.replace(/(\#)(\d+)/g, '<a href="https://support.forgeservicelab.fi/redmine/issues/$2">$1$2</a>');
}

function unescapeHTML (string) {
  string = string.replace(/&lt;/g, '<');
  return string.replace(/&gt;/g, '>');
}

function linkIssues () {
  Q("li", Q("ol")).each (function () {
    this.innerHTML = linkId(this.innerHTML);
  });
  Q("pre", Q(".changeset-message")).each (function () {
    this.innerHTML = linkId(this.innerHTML);
  });
  Q("#description").each (function () {
    this.innerHTML = linkId(this.innerHTML);
  });
}

function linkURLs () {
  Q('#description').each(function() {
    var urlRegex = /(https?:\/\/[^\s|<]+)/; 
    this.innerHTML = this.innerHTML.replace(urlRegex, '<a href="$1">$1</a>');
  });
}

typography = document.createElement('link');
typography.rel="stylesheet";
typography.type="text/css";
typography.href="//cloud.typography.com/7101492/690064/css/fonts.css";
document.head.appendChild(typography);

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

Q( document ).ready(function() {
  Q(':checkbox').each(function() {
    Q(this).addClass('uiswitch');
  });

  Q(':radio').each(function() {
    Q(this).addClass('uiswitch');
  });

  Q('select').each(function() {
    Q(this).addClass('setting-input');
  });

  Q('table', ('#side-panel-content')).each(function() {
    Q(this).removeClass('stripped');
  });

  Q("td[id='footer']").each(function (index) {
    if (index > 0) {
      Q(this).css('background-image','none');
    }
  });
  Q('link[rel="shortcut icon"]').attr('href','/img/FORGE_favicon.ico');
  var login = document.createElement('i');
  Q(login).addClass('fa fa-sign-in');
  var logout = document.createElement('i');
  Q(logout).addClass('fa fa-sign-out');
  Q('a[href^="/login"]').append("&nbsp;");
  Q('a[href^="/login"]').append(login);
  Q('a[href="/logout"]').append("&nbsp;");
  Q('a[href="/logout"]').append(logout);
  Q("input[name='email.address'").each(function() {
    this.disabled = true;
  });
  Q('span').each(function() {
    if (this.innerHTML.search('Started by') == 0) { 
      this.innerHTML = unescapeHTML(this.innerHTML);
    }
  });

  changeIcons();
  linkIssues();
//  linkURLs();

  var validationObserver = new MutationObserver(function() {
    Q(".warning", ".validation-error-area").each(function() {
      Q(this).css('background-image','none');
      if (Q(this).children()[0].tagName != 'I') {
        var warningIcon = document.createElement('i');
        warningIcon.addClassName('fa fa-warning');
        Q(this).prepend(warningIcon);
      }
    });
    Q(".error", ".validation-error-area").each(function() {
      Q(this).css('background-image','none');
      if (Q(this).children()[0].tagName != 'I') {
        var errorIcon = document.createElement('i');
        errorIcon.addClassName('fa fa-minus-circle');
        Q(this).prepend(errorIcon);
      }
    });
  });

  Q('.validation-error-area').each(function() {
    validationObserver.observe(this, {
      subtree: true,
      childList: true
    });
  });

  var queueObserver = new MutationObserver(function() {
    Q('table', ('#side-panel-content')).each(function() {
      Q(this).removeClass('stripped');
    });

    Q('img', ('#buildQueue')).each(function () {
      if (this.src.search('collapse\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-minus');
        return;
      } else if (this.src.search('stop\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-times-circle');
        return;
      } else {
        replaceImage(this, 'fa fa-plus');
      }
    });

    Q('img',('#executors')).each(function() {
      if (this.src.search('collapse\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-minus');
      } else if (this.src.search('expand\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-plus');
      } else if (this.src.search('computer\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-desktop');
      } else if (this.src.search('computer-x\.(png|gif)') > 0) {
        replaceImageWithStack(this, 'fa fa-desktop', 'fa fa-times', 'red');
      } else if (this.src.search('stop\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-times-circle');
      }
    });

    Q('img',('#buildHistory')).each(function() {
      if (this.src.search('collapse\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-minus');
      } else if (this.src.search('expand\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-plus');
      } else if (this.src.search('stop\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-times-circle');
      } else if (this.src.search('red\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle', 'crimson');
      } else if (this.src.search('red_anime\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle fa-blink', 'crimson');
      } else if (this.src.search('(blue|green)\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle', 'mediumseagreen');
      } else if (this.src.search('(blue|green)_anime\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle fa-blink', 'mediumseagreen');
      } else if (this.src.search('(aborted|disabled|grey|nobuilt)\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle', 'lightslategrey');
      } else if (this.src.search('(aborted|disabled|grey|nobuilt)_anime\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle fa-blink', 'lightslategrey');
      } else if (this.src.search('yellow\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle', 'gold');
      } else if (this.src.search('yellow_anime\.(png|gif)') > 0) {
        replaceImage(this, 'fa fa-circle fa-blink', 'gold');
      }
    });
  });

  Q('#side-panel-content').each(function() {
    queueObserver.observe(this, {
      subtree: true,
      childList: true
    });
  });

  var breadcrumbObserver = new MutationObserver(function() {
   changeIcons();
  });

  Q('#breadcrumb-menu-target').each(function() {
    breadcrumbObserver.observe(this, {
      subtree: true,
      childList: true
    });
  });
  Q('#people').each(function() {
    breadcrumbObserver.observe(this, {
      subtree: true,
      childList: true
    });
  });
  Q('#projectStatus').each(function() {
    breadcrumbObserver.observe(this, {
      subtree: true,
      childList: true
    });
  });
  Q('#trend').each(function() {
    breadcrumbObserver.observe(this, {
      subtree: true,
      childList: true
    });
  });
});
