# Twig テンプレートを WordPress と Eleventy で共有するための開発環境の例

## ワークフロー

### 1. フロントエンド開発者

Eleventy を使用して Twig テンプレートを開発します。Twig との互換性が高い Node.js 実装である[Twing](https://github.com/NightlyCommit/twing)を使用します。

`frontend/src/components`ディレクトリ内の Twig テンプレートは、WordPress でもそのまま再利用可能なように設計します。Eleventy のデータ構造に依存するテンプレートは再利用不可能となるため、各ルート（route）に対応するテンプレートをアダプターとして位置付けることで、コンポーネントの独立性を保ちます。

```sh
$ cd frontend
$ npm start
```

静的サイトとしてビルドされるため、ステージング環境等のセットアップが容易です。

```sh
$ npm run build
```

### 2. WordPress 開発者

フロントエンド開発者によって開発された Twig テンプレートを引き継ぎ、WordPress テーマに適用します。Twig テンプレートを使用するために、プラグインとして[Timber](https://timber.github.io/docs/)をインストールします。

`npm run build`コマンドを実行すると、Twig テンプレートおよびその他フロントエンドのアセットがビルドされ、`wordpress/my-theme`ディレクトリ内にコピーされます。フロントエンド開発者によってアセットが更新された場合には、再びこのコマンドを実行して最新の状態に追従します。Twig テンプレートを Git にコミットすると、変更の際に差分を追跡できます。

[wp-env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/)をインストールすると、WordPress のローカル開発環境を簡単にセットアップできます。

```sh
$ npm install --global @wordpress/env
```

```sh
$ cd wordpress
$ npm run build
$ wp-env start
```
