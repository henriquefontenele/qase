# Qase
Este projeto visa mostrar a integração da ferramenta de gerenciamento de teste **QASE com o GITHUB**.

## Passo-a-Passo
Segue um passo-a-passo de como configurar o Github para integrar com a ferramenta QASE.

### Configuração na QASE

1 - Crie um projeto na ferramenta QASE.

2 - Pegue o ID do projeto que você criou. No meu caso ficou "GAC" (Ex.: https://app.qase.io/project/GAC)

3 - Crie um token na QASE. (Crie aqui: https://app.qase.io/user/api/token)

4 - Instale o Github App na QASE. (https://app.qase.io/apps)

5 - Crie um "Test Run" no projeto que você configurou anteriormente, selecionando as configurações abaixo: *(só pode fazer essa etapa depois de ter feito o passo 3 da configuração do Github)*

- Tipo = AUTOMATED;
- CI/CD system = Github app;
- Repository = qase (o que eu acabei de criar)
- Branch = master (no meu caso estou apontando pra master)
- Workflow = qase.yml (aponte para o actions que você copiou o código acima)

### Configuração no Github
1 - Crie um repositório no Github.

2 - Adicione o token criado na QASE, nas configurações do repositório do Github a ser usado, navegando em Settings / Secrets and variables / Actions / New Repository Secret, com o nome de "QASE_API_TOKEN". (https://github.com/"nomeDaSuaConta"/"nomeDoSeuRepositorio"/settings/secrets/actions)

3 - Crie um Github Actions e cole o código abaixo:

name: Github for Qase

on:

  workflow_dispatch:
  
    inputs:
    
      qase_api_base_url:
      
        description: 'Qase API URL'
        
        required: true
        
      qase_report:
      
        description: 'Enabled/disabled reporting to Qase'
        
        required: true
        
      qase_project_code:
      
        description: 'Qase project code'
        
        required: true
        
      qase_run_id:
      
        description: 'Qase Run ID'
        
         required: true
         
       qase_run_complete:
       
         description: 'Qase Run autocomplete'
         
         required: true
         
env:

  QASE_API_BASE_URL: ${{ inputs.qase_api_base_url }}
  
  QASE_TESTOPS_PROJECT: ${{ inputs.qase_project_code }}
  
  QASE_TESTOPS_RUN_ID: ${{ inputs.qase_run_id }}
  
  QASE_TESTOPS_RUN_COMPLETE: true
  
  QASE_TESTOPS_API_TOKEN: ${{ secrets.QASE_API_TOKEN }}
  
jobs:

  test:
  
     timeout-minutes: 60
     
     runs-on: ubuntu-latest
     
     steps:
     
     - uses: actions/checkout@v4
     
     - uses: actions/setup-node@v4
     
     - uses: cskmnrpt/qase-link-run@v2
     
       env:
       
         QASE_API_TOKEN: ${{ env.QASE_TESTOPS_API_TOKEN }}
         
     - run: npm install
     
     - run: npm test
