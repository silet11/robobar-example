pipeline {
    agent any
    options{
        ansiColor('xterm')
    }
    stages {
        stage('Open') {
            steps {
                nodejs('node-14.18.2'){
                    sh 'yarn install'
                }
            }
        }
        stage('Test'){
            steps{
                nodejs('node-14.18.2'){
                     sh 'yarn cy:ci'
                }

            }
            post {
                 always {
                     junit 'results/*.xml'
                  }
            }

        }
        stage('Security'){
            steps{
                sh 'trivy fs --format json --output trivy-results.json .'
            }
            post{
                always{
                   recordIssues(tools: [trivy(pattern: 'trivy-results.json')])

                }
            }

        }

    }
}