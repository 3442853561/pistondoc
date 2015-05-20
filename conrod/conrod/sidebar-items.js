initSidebarItems({"enum":[["Color","Color supporting RGB and HSL variants."],["Corner","A corner of a rectangle."],["Direction","Directionally positioned, relative to another widget."],["Framing","To be used as a parameter for defining the aesthetic of the widget frame."],["HorizontalAlign","The horizontal alignment of a widget positioned relatively to another widget on the y axis."],["MouseButtonState","Represents the current state of a mouse button."],["Place","Place the widget at a position on the Canvas."],["Position","A cached widget's position for rendering."],["UiId","For functions that may take either a WidgetId or a CanvasId."],["VerticalAlign","The vertical alignment of a widget positioned relatively to another widget on the x axis."]],"fn":[["align_bottom_of","The y offset required to align an element with `height` to the bottom of a target element."],["align_left_of","The x offset required to align an element with `width` to the left of a target element."],["align_right_of","The x offset required to align an element with `width` to the right of a target element."],["align_top_of","The y offset required to align an element with `height` to the top of a target element."],["bottom_left_of","The position of a rect with `dim` Dimensions at the bottom left of the `target` Dimensions."],["bottom_right_of","The position of a rect with `dim` Dimensions at the bottom right of the `target` Dimensions."],["mid_bottom_of","The position of a rect with `dim` Dimensions at the middle of the inside of the bottom edge of the `target` Dimensions."],["mid_left_of","The position of a rect with `dim` Dimensions at the middle of the inside of the left edge of the `target` Dimensions."],["mid_right_of","The position of a rect with `dim` Dimensions at the middle of the inside of the right edge of the `target` Dimensions."],["mid_top_of","The position of a rect with `dim` Dimensions at the middle of the inside of the top edge of the `target` Dimensions."],["middle_of","The position of a rect with `dim` Dimensions at the middle of the `target` Dimensions."],["top_left_of","The position of a rect with `dim` Dimensions at the top left of the `target` Dimensions."],["top_right_of","The position of a rect with `dim` Dimensions at the top right of the `target` Dimensions."]],"mod":[["color",""],["utils",""]],"struct":[["Align","The alignment of an element's dimensions with another's."],["Background","A type for drawing a colored window background."],["Button","A pressable button widget whose reaction is triggered upon release."],["Canvas","The kind of Canvas."],["DropDownList","Displays a given `Vec<String>` as a selectable drop down menu. It's reaction is triggered upon selection of a list item."],["EnvelopeEditor","Used for editing a series of 2D Points on a cartesian (X, Y) plane within some given range. Useful for things such as oscillator/automation envelopes or any value series represented periodically."],["Floating","A type of Canvas for flexibly designing and guiding widget layout as splits of a window."],["GlyphCache","A wrapper over some CharacterCache, exposing it's functionality via a RefCell."],["Label","Displays some given text centred within a rectangle."],["Mouse","Represents the current state of the Mouse."],["MouseScroll","The amount of scrolling that has occurred since the last render event."],["NumberDialer","A widget for precision control over any digit within a value. The reaction is triggered when the value is updated or if the mouse button is released while the cursor is above the widget."],["Slider","Linear value selection. If the slider's width is greater than it's height, it will automatically become a horizontal slider, otherwise it will be a vertical slider. Its reaction is triggered if the value is updated or if the mouse button is released while the cursor is above the rectangle."],["Split","A type of Canvas for flexibly designing and guiding widget layout as splits of a window."],["TextBox","A widget for displaying and mutating a given one-line text `String`. It's reaction is triggered upon pressing of the `Enter`/`Return` key."],["Theme","A serializable collection of canvas and widget styling defaults."],["Toggle","A pressable widget for toggling the state of a bool. Like the button widget, it's reaction is triggered upon release and will return the new bool state. Note that the toggle will not mutate the bool for you, you should do this yourself within the react closure."],["Ui","`Ui` is the most important type within Conrod and is necessary for rendering and maintaining widget state. # Ui Handles the following: * Contains the state of all widgets which can be indexed via their UiId. * Stores rendering state for each widget until the end of each render cycle. * Contains the theme used for default styling of the widgets. * Maintains the latest user input state (for mouse and keyboard). * Maintains the latest window dimensions."],["UserInput","A wrapper over the current user input state."],["WidgetMatrix","Draw a matrix of any rectangular widget type, where the matrix will provide a function with the widget number, it's `rows` and `cols` position, the width and height for the widget and the location at which the widget should be drawn."],["XYPad","Used for displaying and controlling a 2D point on a cartesian plane within a given range. Its reaction is triggered when the value is updated or if the mouse button is released while the cursor is above the rectangle."]],"trait":[["CharacterCache","Stores characters in a buffer and loads them by demand."],["Colorable","Types that can be colored."],["EnvelopePoint","`EnvPoint` must be implemented for any type that is used as a 2D point within the EnvelopeEditor."],["Frameable","Widgets that may display a frame."],["Labelable","Widgets that may display some label."],["Positionable","Widgets that are positionable."],["Sizeable","Widgets that support different dimensions."],["Widget","A trait to be implemented by all Widget types."]],"type":[["CanvasId","Unique canvas identifier. Each canvas must use a unique `CanvasId` so that it's state can be cached within the `Ui` type. The reason we use a usize is because canvasses are cached within a `Vec`, which is limited to a size of `usize` elements."],["Depth","The depth at which the widget will be rendered. This determines the order of rendering where widgets with a greater depth will be rendered first. 0.0 is the default depth."],["Dimensions","General use 2D spatial dimensions."],["FontSize","Font size used throughout Conrod."],["Point","General use 2D spatial point."],["WidgetId","Unique widget identifier. Each widget must use a unique `WidgetId` so that it's state can be cached within the `Ui` type. The reason we use a usize is because widgets are cached within a `Vec`, which is limited to a size of `usize` elements."]]});