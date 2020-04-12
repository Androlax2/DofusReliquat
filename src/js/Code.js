/**
 * On edit of the sheet cell
 * A column : History of the "Forgemagie" lines
 * B column : notify user of a problem in the line
 * C column : Add tryed "Forgemagie" rune
 *
 * @param e
 */
function onEdit(e)
{
    if (e.range.getColumn() === 1 || e.range.getColumn() === 3) {
        let ss = SpreadsheetApp.getActiveSpreadsheet(),
            sheet = ss.getActiveSheet();

        sheet.getRange('B1:B50').clear();
        if (e.range.getColumn() === 1) sheet.getRange('C1:C50').clear();
        sheet.getRange('D2').clear();

        handleCalcReliquat();
    }
}

/**
 * Handle calculation of the reliquat
 */
function handleCalcReliquat()
{
    const reliquatCalc = new Reliquat(new RunesWeightFR());
    let ss = SpreadsheetApp.getActiveSpreadsheet(),
        sheet = ss.getActiveSheet(),
        lines = sheet.getRange('A1:A50').getValues();

    for (let i = 0 ; i < lines.length ; i++) {
        if (!sheet.getRange(`A${i + 1}`).isBlank()) {
            try {
                let lineReliquat = reliquatCalc.add(lines[i][0], sheet.getRange(`C${i + 1}`).getValue());
                if (!lineReliquat) {
                    sheet
                        .getRange(`B${i + 1}`)
                        .setValue('Impossible de calculer le reliquat. Il manque la rune que vous avez passé. Veuillez remplir la case à droite.')
                        .setBackground('red')
                        .setFontColor('white')
                        .setHorizontalAlignment('center')
                        .setVerticalAlignment('middle')
                        .setWrap(true);

                    sheet
                        .getRange(`C${i + 1}`)
                        .setValue('Corriger ici. Par exemple pour une rune "PA SA", écrivez : "3 Sagesse".')
                        .setBackground('green')
                        .setFontColor('white')
                        .setHorizontalAlignment('center')
                        .setVerticalAlignment('middle')
                        .setWrap(true);
                }
            } catch (e) {
                if (e instanceof MissingRuneWeightException) {
                    sheet
                        .getRange(`B${i + 1}`)
                        .setValue(e.message)
                        .setBackground('red')
                        .setFontColor('white')
                        .setHorizontalAlignment('center')
                        .setVerticalAlignment('middle')
                        .setWrap(true);
                }
            }

            sheet.getRange('D2').setValue(reliquatCalc.calc());
        }
    }
}