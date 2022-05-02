# Custom Bootstrap

Customize [Bootstrap 5](https://getbootstrap.com/) with [Parcel](https://parceljs.org/).

## How to use

1. Clone this repository.

   ```zsh
   git clone https://github.com/yasminzy/custom-bootstrap.git
   ```

1. Go to the repo directory and install the dependencies.

   If you are on Linux, use Node.js before version 18 because at the time of this writing, using that version will later result in an error: `No native build was found for platform=linux...`

   ```zsh
   pnpm i
   ```

1. Run Parcel's development server and go to [localhost:1234](localhost:1234).

   ```zsh
   pnpm dev
   ```

1. Edit `scss/custom.scss`.

   - **Color**

     You can use either the color from `scss/_material-color.scss` or your own color.

   - **Variables**

     Copy the rules you want to change from `node_modules/bootstrap/scss/_variables.scss` and override the value.

   - **Components**

     Comment out the components you don't need.

1. If you're done, stop the dev server and start the build mode.

   ```zsh
   pnpm build
   ```

   You can find the customized Bootstrap in `dist/index.[xxxxxxxx].css`.
