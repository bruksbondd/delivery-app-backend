import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions, SwaggerCustomOptions } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors()

	const config = new DocumentBuilder()
		.setTitle('Delivery')
		.setDescription('The Delivery API description')
		.setBasePath('api')
		.setVersion('1.0')
		.addTag('delivery')
		.build()

		
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	await app.listen(4200)
}
bootstrap()
