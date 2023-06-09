# Getting Started
Developing an addon which depends on PIXEL UI requires a few steps to be taken before you can start coding.

## Installation
PIXEL UI must be installed within the environment that your addon is being used, it can be downloaded from the GitHub releases page [here](https://github.com/TomDotBat/pixel-ui/releases/latest).
To install the library, the release archive must be extracted into the `garrysmod/addons` folder. The folder structure should look similar to this:
```json
.
└── garrysmod/
      └── addons/
			└── pixel-ui/
			      ├── lua/
			      │     ├── autorun/
			      │     │     └── sh_pixelui_loader.lua
			      │     └── pixelui/
			      │           ├── core/
			      │           ├── drawing/
			      │           ├── elements/
			      │           ├── libraries/
			      │           ├── menus/
			      │           └── sh_config.lua
				  ├── README.md
			      └── ...
```
<div class="bs-callout bs-callout-info">
  <h4>Note</h4>
  The addon folder must not contain capital letters on <b>Windows</b> servers, otherwise it will not load.
</div>

## Loading after PIXEL UI
To ensure your addon does not reference PIXEL UI before it has been loaded, you are required to implement the `PIXEL.UI.FullyLoaded` hook. The following example demonstrates how this can be achieved:

```lua
if PIXEL and PIXEL.UI then
	loadAddon()
	return
end

hook.Add("PIXEL.UI.FullyLoaded", "MyAddon.WaitForPIXELUI", loadAddon)
```

<div class="bs-callout bs-callout-info">
  <h4>Note</h4>
  The hook identifier must be unique to your addon, failure to do so may result in conflicts with other addons.
</div>