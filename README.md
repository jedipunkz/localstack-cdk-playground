# cdk-localstack-playground

## Usage

Install aws-cdk and aws-cdk-local.

```shell
npm install -g aws-cdk
npm install -g aws-cdk-local
```

Set environment.

```shell
export AWS_SECRET_ACCESS_KEY=test
export AWS_ACCESS_KEY_ID=test
```

Deploy AWS Resources via aws-cdk.

```shell
cdklocal bootstrap
cdklocal --app "npx ts-node --prefer-ts-exts bin/vpc.ts" Deploy
```
