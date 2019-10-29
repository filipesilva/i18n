# I18n

Run:

    yarn build:ivy
    yarn build:compat
    yarn build:ve

to build the app in French, and then:

    yarn run e2e:ivy
    yarn run e2e:compat
    yarn run e2e:ve

to launch the i18n e2e tests.

You can also run the standalone server after a build:

    yarn run serve:ivy
    yarn run serve:compat
    yarn run serve:ve

- *:ivy is the ivy variant with multi-locale localize config
- *:compat is the ivy variant using the old ve single-locale options
- *:ve is the ve variant
