pipeline {
    agent any
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

    }
}