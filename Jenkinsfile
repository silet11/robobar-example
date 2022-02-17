pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'cy:run'
            }
        }
        stage('Test') {
                stage('test: chrome') {
                    steps {
                        sh './yarn run cypress run'
                    }
                }
            post {
                always {
                    junit 'build/test-results/test/*.xml'
                }
            }
        }
    }
}