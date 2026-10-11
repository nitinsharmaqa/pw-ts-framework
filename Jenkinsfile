pipeline {
  agent any
  options {
    timeout(time: 30, unit: 'MINUTES')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install'
      }
    }
    stage('Test') {
      steps {
        sh 'npx playwright test'
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}
