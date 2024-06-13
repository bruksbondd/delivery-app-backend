import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('Delivery')
		.setDescription('The Delivery API description')
		.setVersion('1.0')
		.addTag('delivery')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	app.setGlobalPrefix('api')
	app.enableCors()
	await app.listen(4200)
}
bootstrap()
