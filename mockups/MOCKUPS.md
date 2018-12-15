# Mockups

1. Logo
2. Camera page
    - takes a photo that will be sent to the OCR API
    - option to choose from the gallery
    - pop up: after selecting image to confirm image
3. Items page
  - Shows the processed data from the image
  - Total on top (the smaller total is the calculated value of the added items that got recognised)
  - Total shows green if the recognised total is matching the summed value
  - You can edit the items name and price by clicking them => goes to an edit item page with submit button
  - You can delete items by clicking on it => goes to an edit item page with submit button
  - You can add new item by clicking the "Add new item"
4. Total page
  - the huge number on the top is the amount that is still due( not been assigned) => by selecting items it decreases
  - if the amount due is 0 => it can disappear ? and changes to a text ?
  - the total list are the persons name + the amount they currently own with colors to distinguish
  - you can add people to the total list with the "add person" button (they will have 0 amount due by default)
  - if you click on the name of the person
    -  you can assign items to the person
    -  you can delete that person
    -  all of the dishes should show up but later on we can change the order that the unassigned items will appear before the assigned ones (to make it faster to choose)
    - after clicking the done button, the user goes back to the total page with the updated main total and the person's total
    - we can have colors showing which person choose what in the items list
    - on the bottom we can have a list of all of the items with the colors showing which person claimed it.
