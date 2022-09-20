$(document).ready(function () {
	$(".ciforms-manage-button-export").each(function (index) {
		$buttonExport = $(this);

		var href = $buttonExport.data().ooui.href;

		var buttonMenu = new OO.ui.ButtonMenuSelectWidget({
			label: mw.msg("ci-forms-manage-pager-button-export"),
			icon: "menu",
			flags: ["progressive", "primary"],
			menu: {
				items: [
					new OO.ui.MenuOptionWidget({
						data: "csv",
						label: mw.msg("ci-forms-manage-pager-button-export-csv"),
					}),
					new OO.ui.MenuOptionWidget({
						data: "excel",
						label: mw.msg("ci-forms-manage-pager-button-export-excel"),
					}),
				],
			},
		});

		var panelLayout = new OO.ui.PanelLayout({
			padded: false,
			expanded: false,
			classes: ["ci-forms-manage-pager-panel-layout"],
		});

		buttonMenu.getMenu().on("choose", function (menuOption) {
			var data = menuOption.getData();
			window.location.assign(href.replace("format=csv", "format=" + data));
		});

		$buttonExport.replaceWith(panelLayout.$element.append(buttonMenu.$element));
	});
});
