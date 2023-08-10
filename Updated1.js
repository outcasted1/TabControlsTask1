$(document).ready(function controlFunction(event) {
  debugger;
  let tabIndex = 0;

  const focusedElement = document.activeElement;
  const focusableElementsInTable = $(
    '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
      tabIndex +
      ') div table:eq(0) .clcontrol'
  );
  tabHeaderLength = $(
    '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
  ).length;
  const lastControlIndex = focusableElementsInTable.length - 1;
  if (focusedElement && focusableElementsInTable.is(focusedElement)) {
    const currentTabIndex = focusableElementsInTable.index(focusedElement);
    if (currentTabIndex === lastControlIndex) {
      if (tabIndex === tabHeaderLength) {
        tabIndex = 0;
      }
      const nextTabHeader = tabIndex;
      console.log(tabIndex);
      $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor')
        .eq(nextTabHeader)
        .focus()
        .click();
      $(
        '.customTab .tabpanelitems .ui-tabs-panel:eq(' +
          tabIndex +
          ') div table:eq(0) .clcontrol'
      )
        .eq(0)
        .focus();
    } else {
      focusableElementsInTable.eq(currentTabIndex + 1).focus();
    }
  }
});
